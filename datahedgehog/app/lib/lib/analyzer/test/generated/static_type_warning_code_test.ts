/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_type_warning_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticTypeWarningCodeTest);
        defineReflectiveTests(StrongModeStaticTypeWarningCodeTest);
    });
};
export namespace StaticTypeWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StaticTypeWarningCodeTest';
    export type Interface = Omit<StaticTypeWarningCodeTest, Constructors>;
}
@DartClass
export class StaticTypeWarningCodeTest extends lib3.ResolverTestCase {
    fail_method_lookup_mixin_of_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }\nclass B {}\nabstract class M extends A {}\nclass T = B with M; // Warning: B does not extend A\nmain() {\n  new T().a(); // Warning: The method \'a\' is not defined for the class \'T\'\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    fail_method_lookup_mixin_of_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }\nclass B {}\nabstract class M implements A {}\nclass T = B with M; // Warning: Missing concrete implementation of \'A.a\'\nmain() {\n  new T().a(); // Warning: The method \'a\' is not defined for the class \'T\'\n}\n',new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE,StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    fail_method_lookup_mixin_of_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A {}\nclass B { b() => null; }\nclass C {}\nclass M extends A with B {}\nclass T = C with M;\nmain() {\n  new T().b();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    fail_method_lookup_mixin_of_mixin_application() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }\nclass B {}\nclass C {}\nclass M = A with B;\nclass T = C with M;\nmain() {\n  new T().a();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    fail_typeArgumentNotMatchingBounds_ofFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\ntypedef F<T extends A>();\nF<B> fff;\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    fail_undefinedEnumConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('enum E { ONE }\nE e() {\n  return E.TWO;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_ENUM_CONSTANT));
        } )());
    }

    test_ambiguousImport_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\ng() { return f(); }');
            this.addNamedSource("/lib1.dart",'library lib1;\nf() {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nf() {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_assert_message_suppresses_type_promotion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {\n  void foo() {}\n}\n\nf(Object x) {\n  if (x is C) {\n    x.foo();\n    assert(true, () { x = new C(); return \'msg\'; }());\n  }\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_await_flattened() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nFuture<Future<int>> ffi() => null;\nf() async {\n  Future<int> b = await ffi(); // Warning: int not assignable to Future<int>\n}\n',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_await_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nFuture<int> fi() => null;\nf() async {\n  String a = await fi(); // Warning: int not assignable to String\n}\n',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_awaitForIn_declaredVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<int> stream;\n  await for (int i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_declaredVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<String> stream;\n  await for (int i in stream) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE));
        } )());
    }

    test_awaitForIn_downcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<num> stream;\n  await for (int i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_dynamicStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() async {\n  dynamic stream;\n  await for (int i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_dynamicVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<int> stream;\n  await for (var i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_existingVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<int> stream;\n  int i;\n  await for (i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_existingVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<String> stream;\n  int i;\n  await for (i in stream) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE));
        } )());
    }

    test_awaitForIn_notStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() async {\n  await for (var i in true) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_TYPE));
        } )());
    }

    test_awaitForIn_streamOfDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream stream;\n  await for (int i in stream) {}\n}\n');
        } )());
    }

    test_awaitForIn_upcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';\nf() async {\n  Stream<int> stream;\n  await for (num i in stream) {}\n}\n');
        } )());
    }

    test_bug21912() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\ntypedef B AToB(A x);\ntypedef A BToA(B x);\n\nvoid main() {\n  {\n    Function2<Function2<A, B>, Function2<B, A>> t1;\n    Function2<AToB, BToA> t2;\n\n    Function2<Function2<int, double>, Function2<int, double>> left;\n\n    left = t1;\n    left = t2;\n  }\n}\n',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT,StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_expectedOneListTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {\n  <int, int> [];\n}',new core.DartList.literal(StaticTypeWarningCode.EXPECTED_ONE_LIST_TYPE_ARGUMENTS));
        } )());
    }

    test_expectedTwoMapTypeArguments_one() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {\n  <int> {};\n}',new core.DartList.literal(StaticTypeWarningCode.EXPECTED_TWO_MAP_TYPE_ARGUMENTS));
        } )());
    }

    test_expectedTwoMapTypeArguments_three() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {\n  <int, int, int> {};\n}',new core.DartList.literal(StaticTypeWarningCode.EXPECTED_TWO_MAP_TYPE_ARGUMENTS));
        } )());
    }

    test_forIn_declaredVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  for (int i in <int>[]) {}\n}\n');
        } )());
    }

    test_forIn_declaredVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  for (int i in <String>[]) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE));
        } )());
    }

    test_forIn_downcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  for (int i in <num>[]) {}\n}\n');
        } )());
    }

    test_forIn_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  dynamic d; // Could be [].\n  for (var i in d) {}\n}\n');
        } )());
    }

    test_forIn_dynamicIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  dynamic iterable;\n  for (int i in iterable) {}\n}\n');
        } )());
    }

    test_forIn_dynamicVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  for (var i in <int>[]) {}\n}\n');
        } )());
    }

    test_forIn_existingVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  int i;\n  for (i in <int>[]) {}\n}\n');
        } )());
    }

    test_forIn_existingVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  int i;\n  for (i in <String>[]) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE));
        } )());
    }

    test_forIn_iterableOfDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  for (int i in []) {}\n}\n');
        } )());
    }

    test_forIn_notIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  for (var i in true) {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_TYPE));
        } )());
    }

    test_forIn_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  Object o; // Could be [].\n  for (var i in o) {}\n}\n');
        } )());
    }

    test_forIn_typeBoundBad() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class Foo<T extends Iterable<int>> {\n  void method(T iterable) {\n    for (String i in iterable) {}\n  }\n}\n',new core.DartList.literal(StaticTypeWarningCode.FOR_IN_OF_INVALID_ELEMENT_TYPE));
        } )());
    }

    test_forIn_typeBoundGood() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('class Foo<T extends Iterable<int>> {\n  void method(T iterable) {\n    for (var i in iterable) {}\n  }\n}\n');
        } )());
    }

    test_forIn_upcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {\n  for (num i in <int>[]) {}\n}\n');
        } )());
    }

    test_illegalAsyncGeneratorReturnType_function_nonStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async* {}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalAsyncGeneratorReturnType_function_subtypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';\nabstract class SubStream<T> implements Stream<T> {}\nSubStream<int> f() async* {}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalAsyncGeneratorReturnType_method_nonStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {\n  int f() async* {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalAsyncGeneratorReturnType_method_subtypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';\nabstract class SubStream<T> implements Stream<T> {}\nclass C {\n  SubStream<int> f() async* {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalAsyncReturnType_function_nonFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async {}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE,HintCode.MISSING_RETURN));
        } )());
    }

    test_illegalAsyncReturnType_function_subtypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';\nabstract class SubFuture<T> implements Future<T> {}\nSubFuture<int> f() async {\n  return 0;\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE));
        } )());
    }

    test_illegalAsyncReturnType_method_nonFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {\n  int m() async {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE,HintCode.MISSING_RETURN));
        } )());
    }

    test_illegalAsyncReturnType_method_subtypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';\nabstract class SubFuture<T> implements Future<T> {}\nclass C {\n  SubFuture<int> m() async {\n    return 0;\n  }\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE));
        } )());
    }

    test_illegalSyncGeneratorReturnType_function_nonIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() sync* {}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalSyncGeneratorReturnType_function_subclassOfIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('abstract class SubIterator<T> implements Iterator<T> {}\nSubIterator<int> f() sync* {}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalSyncGeneratorReturnType_method_nonIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {\n  int f() sync* {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_illegalSyncGeneratorReturnType_method_subclassOfIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('abstract class SubIterator<T> implements Iterator<T> {}\nclass C {\n  SubIterator<int> f() sync* {}\n}\n',new core.DartList.literal(StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_inconsistentMethodInheritance_paramCount() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {\n  int x();\n}\nabstract class B {\n  int x(int y);\n}\nclass C implements A, B {\n}',new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
        } )());
    }

    test_inconsistentMethodInheritance_paramType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {\n  x(int i);\n}\nabstract class B {\n  x(String s);\n}\nabstract class C implements A, B {}\n',new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
        } )());
    }

    test_inconsistentMethodInheritance_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {\n  int x();\n}\nabstract class B {\n  String x();\n}\nabstract class C implements A, B {}\n',new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
        } )());
    }

    test_instanceAccessToStaticMember_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static m() {}\n}\nmain(A a) {\n  a.m();\n}',new core.DartList.literal(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER));
        } )());
    }

    test_instanceAccessToStaticMember_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static m() {}\n}\nmain(A a) {\n  a.m;\n}',new core.DartList.literal(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER));
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static var f;\n}\nmain(A a) {\n  a.f;\n}',new core.DartList.literal(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER));
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static get f => 42;\n}\nmain(A a) {\n  a.f;\n}',new core.DartList.literal(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER));
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static set f(x) {}\n}\nmain(A a) {\n  a.f = 42;\n}',new core.DartList.literal(StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER));
        } )());
    }

    test_invalidAssignment_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class byte {\n  int _value;\n  byte(this._value);\n  int operator +(int val) { return 0; }\n}\n\nvoid main() {\n  byte b = new byte(52);\n  b += 3;\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_defaultValue_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f({String x: 0}) {\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_defaultValue_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f([String x = 0]) {\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {\n  dynamic = 1;\n}\n',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_functionExpressionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {\n  String x = (() => 5)();\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_ifNullAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f(int i) {\n  double d;\n  d ??= i;\n}\n',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  int x;\n}\nf() {\n  A a;\n  a.x = \'0\';\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  int x;\n  x = \'0\';\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_regressionInIssue18468Fix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C<T> {\n  T t = int;\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_staticVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static int x;\n}\nf() {\n  A.x = \'0\';\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_topLevelVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int x = 'string';",new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class B<T> {\n  T value;\n  void test(num n) {\n    value = n;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  int x = \'string\';\n}',new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invocationOfNonFunction_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  void m() {\n    A();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_localGenericFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Function f) {\n  return f();\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_localObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Object o) {\n  return o();\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  int x;\n  return x();\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_ordinaryInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static int x;\n}\nclass B {\n  m() {\n    A.x();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_staticInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static int get g => 0;\n  f() {\n    A.g();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunction_superExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  int get g => 0;\n}\nclass B extends A {\n  m() {\n    var v = super.g();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION));
        } )());
    }

    test_invocationOfNonFunctionExpression_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  3(5);\n}',new core.DartList.literal(StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION_EXPRESSION));
        } )());
    }

    test_nonBoolCondition_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("f() { return 3 ? 2 : 1; }",new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolCondition_do() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  do {} while (3);\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolCondition_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  for (;3;) {}\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolCondition_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  if (3) return 2; else return 1;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolCondition_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  while (3) {}\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolExpression_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int makeAssertion() => 1;\nf() {\n  assert(makeAssertion);\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_EXPRESSION));
        } )());
    }

    test_nonBoolExpression_interfaceType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  assert(0);\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_EXPRESSION));
        } )());
    }

    test_nonBoolNegationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {\n  !42;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_NEGATION_EXPRESSION));
        } )());
    }

    test_nonBoolOperand_and_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(int left, bool right) {\n  return left && right;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_OPERAND));
        } )());
    }

    test_nonBoolOperand_and_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(bool left, String right) {\n  return left && right;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_OPERAND));
        } )());
    }

    test_nonBoolOperand_or_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(List<int> left, bool right) {\n  return left || right;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_OPERAND));
        } )());
    }

    test_nonBoolOperand_or_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(bool left, double right) {\n  return left || right;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_OPERAND));
        } )());
    }

    test_nonTypeAsTypeArgument_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int A;\nclass B<E> {}\nf(B<A> b) {}',new core.DartList.literal(StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT));
        } )());
    }

    test_nonTypeAsTypeArgument_undefinedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class B<E> {}\nf(B<A> b) {}',new core.DartList.literal(StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT));
        } )());
    }

    test_returnOfInvalidType_async_future_int_mismatches_future_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nFuture<String> f() async {\n  return 5;\n}\n',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_async_future_int_mismatches_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async {\n  return 5;\n}\n',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int f() => '0';",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int get g => '0';",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  String m() {\n    int f() => \'0\';\n    return \'0\';\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  int f() => \'0\';\n}',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_not_issued_for_expressionFunctionBody_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode("void f() => 42;");
        } )());
    }

    test_returnOfInvalidType_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int f() { return '0'; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int get g { return '0'; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  String m() {\n    int f() { return \'0\'; }\n    return \'0\';\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  int f() { return \'0\'; }\n}',new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_not_issued_for_valid_generic_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('abstract class F<T, U>  {\n  U get value;\n}\n\nabstract class G<T> {\n  T test(F<int, T> arg) => arg.value;\n}\n\nabstract class H<S> {\n  S test(F<int, S> arg) => arg.value;\n}\n\nvoid main() { }');
        } )());
    }

    test_returnOfInvalidType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("void f() { return 42; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_typeArgumentNotMatchingBounds_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass C {}\nclass G<E extends A> {}\nclass D = G<B> with C;\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nclass C extends G<B>{}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_extends_regressionInIssue18468Fix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class X<T extends Type> {}\nclass Y<U> extends X<U> {}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nclass C {\n  var f;\n  C(G<B> this.f) {}\n}',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nG<B> f() { return null; }\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\ntypedef G<B> f();\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nf(G<B> h()) {}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nclass C implements G<B>{}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nvar b = 1 is G<B>;\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {\n  Point(T x, T y);\n}\n\nmain() {\n  Point/*<T>*/ f/*<T extends num>*/(num/*=T*/ x, num/*=T*/ y) {\n    return new Point/*<T>*/(x, y);\n  }\n  print(f/*<String>*/(\'hello\', \'world\'));\n}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {\n  Point(T x, T y);\n}\n\nclass PointFactory {\n  Point/*<T>*/ point/*<T extends num>*/(num/*=T*/ x, num/*=T*/ y) {\n    return new Point/*<T>*/(x, y);\n  }\n}\n\nf(PointFactory factory) {\n  print(factory.point/*<String>*/(\'hello\', \'world\'));\n}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {\n  Point(T x, T y);\n}\n\nPoint/*<T>*/ f/*<T extends num>*/(num/*=T*/ x, num/*=T*/ y) {\n  return new Point/*<T>*/(x, y);\n}\n\nmain() {\n  print(f/*<String>*/(\'hello\', \'world\'));\n}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nclass C {\n  G<B> m() { return null; }\n}',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nf() { return new G<B>(); }\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_new_superTypeOfUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {}\nclass C extends B {}\nclass G<E extends B> {}\nf() { return new G<A>(); }\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nf(G<B> g) {}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass X<T extends A> {\n  X(int x, int y) {}\n  factory X.name(int x, int y) = X<B>;\n}',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS,StaticWarningCode.REDIRECT_TO_INVALID_RETURN_TYPE));
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass C<E> {}\nclass D<E extends A> {}\nC<D<B>> Var;\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass C {}\nclass G<E extends A> {}\nclass D<F extends G<B>> {}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nG<B> g;\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeArgumentNotMatchingBounds_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {}\nclass G<E extends A> {}\nclass C extends Object with G<B>{}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
        } )());
    }

    test_typeParameterSupertypeOfItsBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<T extends T> {\n}\n',new core.DartList.literal(StaticTypeWarningCode.TYPE_PARAMETER_SUPERTYPE_OF_ITS_BOUND));
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_accessedInClosureRight_mutated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }\nmain(Object p) {\n  (p is String) && callMe(() { p.length; });\n  p = 0;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_mutatedInLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  ((p is String) && ((p = 42) == 42)) && p.length != 0;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_mutatedInRight() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  (p is String) && (((p = 42) == 42) && p.length != 0);\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_conditional_useInThen_accessedInClosure_hasAssignment_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }\nmain(Object p) {\n  p is String ? callMe(() { p.length; }) : 0;\n  p = 42;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_conditional_useInThen_accessedInClosure_hasAssignment_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }\nmain(Object p) {\n  p = 42;\n  p is String ? callMe(() { p.length; }) : 0;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_conditional_useInThen_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  p is String ? (p.length + (p = 42)) : 0;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_accessedInClosure_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }\nmain(Object p) {\n  if (p is String) {\n    callMe(() {\n      p.length;\n    });\n  }\n  p = 0;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_and_right_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  if (p is String && (p = null) == null) {\n    p.length;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_extends_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}\nclass A<T> {}\nclass B<S> extends A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B) {\n    p.b;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_extends_notMoreSpecific_notMoreSpecificTypeArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}\nclass A<T> {}\nclass B<S> extends A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B<int>) {\n    p.b;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  if (p is String) {\n    p.length;\n    p = 0;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  if (p is String) {\n    p = 0;\n    p.length;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_anonymous_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  if (p is String) {\n    p.length;\n  }\n  () {p = 0;};\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_anonymous_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  () {p = 0;};\n  if (p is String) {\n    p.length;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_function_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  if (p is String) {\n    p.length;\n  }\n  f() {p = 0;};\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_function_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {\n  f() {p = 0;};\n  if (p is String) {\n    p.length;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_implements_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}\nclass A<T> {}\nclass B<S> implements A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B) {\n    p.b;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_typePromotion_if_with_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}\nclass A<T> {}\nclass B<S> extends Object with A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B) {\n    p.b;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f() {\n  g();\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_FUNCTION));
        } )());
    }

    test_undefinedFunction_inCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f() {\n  try {\n  } on Object {\n    g();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_FUNCTION));
        } )());
    }

    test_undefinedFunction_inImportedLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\' as f;\nmain() { return f.g(); }');
            this.addNamedSource("/lib.dart",'library lib;\nh() {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_FUNCTION));
        } )());
    }

    test_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class T {}\nf(T e) { return e.m; }',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_generic_function_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInUnverifiedCode('f(Function f) {\n  return f.call;\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_object_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInUnverifiedCode('f(Object o) {\n  return o.call;\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_proxy_annotation_fakeProxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('library L;\nclass Fake {\n  const Fake();\n}\nconst proxy = const Fake();\n@proxy class PrefixProxy {}\nmain() {\n  new PrefixProxy().foo;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nvar a = A.B;',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {\n  static int get foo => 42;\n}\nmain() {\n  T..foo;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_typeLiteral_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nf() => A?.hashCode;\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {\n  void m() {}\n}\nf(T e) { return e.m().f; }',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_wrongNumberOfTypeArguments_tooLittle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<K, V> {\n  K element;\n}\nmain(A<int> a) {\n  a.element.anyGetterExistsInDynamic;\n}',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_undefinedGetter_wrongNumberOfTypeArguments_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {\n  E element;\n}\nmain(A<int,int> a) {\n  a.element.anyGetterExistsInDynamic;\n}',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_undefinedGetter_wrongOfTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {\n  E element;\n}\nmain(A<NoSuchType> a) {\n  a.element.anyGetterExistsInDynamic;\n}',new core.DartList.literal(StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT));
        } )());
    }

    test_undefinedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  void m() {\n    n();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_assignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B {\n  f(A a) {\n    A a2 = new A();\n    a += a2;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_generic_function_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Function f) {\n  f.call();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_ignoreTypePropagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {\n  m() {}\n}\nclass C {\n  f() {\n    A a = new B();\n    a.m();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_leastUpperBoundWithNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f(bool b, int i) => (b ? null : i).foo();',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_object_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Object o) {\n  o.call();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_ofNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Null f(int x) => null;\nmain() {\n  f(42).abs();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  _foo() {}\n}');
            await this.assertErrorsInCode('import \'lib.dart\';\nclass B extends A {\n  test() {\n    _foo();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_proxy_annotation_fakeProxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('library L;\nclass Fake {\n  const Fake();\n}\nconst proxy = const Fake();\n@proxy class PrefixProxy {}\nmain() {\n  new PrefixProxy().foo();\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {\n  static void foo() {}\n}\nmain() {\n  T..foo();\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_typeLiteral_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nf() => A?.toString();\n',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethodWithConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {\n  C.m();\n}\nf() {\n  C c = C.m();\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD_WITH_CONSTRUCTOR));
        } )());
    }

    test_undefinedOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nf(A a) {\n  a[0]++;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nf(A a) {\n  a[0];\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nf(A a) {\n  a[0] = 1;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_plus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nf(A a) {\n  a + 1;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nf(A a) {\n  a++;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nf(A a) {\n  ++a;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class T {}\nf(T e1) { e1.m = 0; }',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSetter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nf() { A.B = 0;}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSetter_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {\n  static void set foo(_) {}\n}\nmain() {\n  T..foo = 42;\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSetter_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {\n  void m() {}\n}\nf(T e) { e.m().f = 0; }',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSuperGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {\n  get g {\n    return super.g;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_GETTER));
        } )());
    }

    test_undefinedSuperMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {\n  m() { return super.m(); }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_METHOD));
        } )());
    }

    test_undefinedSuperOperator_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nclass B extends A {\n  operator +(value) {\n    return super + value;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR));
        } )());
    }

    test_undefinedSuperOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nclass B extends A {\n  operator [](index) {\n    return super[index]++;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR));
        } )());
    }

    test_undefinedSuperOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nclass B extends A {\n  operator [](index) {\n    return super[index + 1];\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR));
        } )());
    }

    test_undefinedSuperOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}\nclass B extends A {\n  operator []=(index, value) {\n    return super[index] = 0;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR));
        } )());
    }

    test_undefinedSuperSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass B extends A {\n  f() {\n    super.m = 0;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SUPER_SETTER));
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static int get a => 0;\n}\nclass B extends A {\n  int b() {\n    return a;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER));
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_getter_invokeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static int foo;\n}\n\nclass B extends A {\n  static bar() {\n    foo.abs();\n  }\n}\n',new core.DartList.literal(StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER));
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static void a() {}\n}\nclass B extends A {\n  void b() {\n    a();\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER));
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {\n  static set a(x) {}\n}\nclass B extends A {\n  b(y) {\n    a = y;\n  }\n}',new core.DartList.literal(StaticTypeWarningCode.UNQUALIFIED_REFERENCE_TO_NON_LOCAL_STATIC_MEMBER));
        } )());
    }

    test_wrongNumberOfTypeArguments_classAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass M {}\nclass B<F extends num> = A<F> with M;',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_wrongNumberOfTypeArguments_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E, F> {}\nA<A> a = null;',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_wrongNumberOfTypeArguments_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {}\nA<A, A> a = null;',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_wrongNumberOfTypeArguments_typeTest_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass C<K, V> {}\nf(p) {\n  return p is C<A>;\n}',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_wrongNumberOfTypeArguments_typeTest_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}\nclass C<E> {}\nf(p) {\n  return p is C<A, A>;\n}',new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS));
        } )());
    }

    test_yield_async_to_basic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async* {\n  yield 3;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_yield_async_to_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() async* {\n  yield 3;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_ASYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_yield_async_to_mistyped_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nStream<int> f() async* {\n  yield "foo";\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_each_async_non_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() async* {\n  yield* 0;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_each_async_to_mistyped_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nStream<int> f() async* {\n  yield* g();\n}\nStream<String> g() => null;\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_each_sync_non_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() sync* {\n  yield* 0;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_each_sync_to_mistyped_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() sync* {\n  yield* g();\n}\nIterable<String> g() => null;\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_sync_to_basic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() sync* {\n  yield 3;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    test_yield_sync_to_mistyped_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() sync* {\n  yield "foo";\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE));
        } )());
    }

    test_yield_sync_to_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nStream<int> f() sync* {\n  yield 3;\n}\n',new core.DartList.literal(StaticTypeWarningCode.YIELD_OF_INVALID_TYPE,StaticTypeWarningCode.ILLEGAL_SYNC_GENERATOR_RETURN_TYPE));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeWarningCodeTest() {
    }
}

export namespace StrongModeStaticTypeWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StrongModeStaticTypeWarningCodeTest';
    export type Interface = Omit<StrongModeStaticTypeWarningCodeTest, Constructors>;
}
@DartClass
export class StrongModeStaticTypeWarningCodeTest extends lib3.ResolverTestCase {
    setUp() : void {
        super.setUp();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        this.resetWith({
            options : options});
    }
    test_genericMethodWrongNumberOfTypeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  f/*<int>*/();\n}\n');
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD));
            for(let error of analysisResult.errors) {
                if (op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS)) {
                    expect(error.message,formatList(error.errorCode.message,new core.DartList.literal('() → dynamic',0,1)));
                }
            }
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_legalAsyncGeneratorReturnType_function_supertypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nf() async* { yield 42; }\ndynamic f2() async* { yield 42; }\nObject f3() async* { yield 42; }\nStream f4() async* { yield 42; }\nStream<dynamic> f5() async* { yield 42; }\nStream<Object> f6() async* { yield 42; }\nStream<num> f7() async* { yield 42; }\nStream<int> f8() async* { yield 42; }\n',new core.DartList.literal());
        } )());
    }

    test_legalAsyncReturnType_function_supertypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';\nf() async { return 42; }\ndynamic f2() async { return 42; }\nObject f3() async { return 42; }\nFuture f4() async { return 42; }\nFuture<dynamic> f5() async { return 42; }\nFuture<Object> f6() async { return 42; }\nFuture<num> f7() async { return 42; }\nFuture<int> f8() async { return 42; }\n',new core.DartList.literal());
        } )());
    }

    test_legalSyncGeneratorReturnType_function_supertypeOfIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() sync* { yield 42; }\ndynamic f2() sync* { yield 42; }\nObject f3() sync* { yield 42; }\nIterable f4() sync* { yield 42; }\nIterable<dynamic> f5() sync* { yield 42; }\nIterable<Object> f6() sync* { yield 42; }\nIterable<num> f7() sync* { yield 42; }\nIterable<int> f8() sync* { yield 42; }\n',new core.DartList.literal());
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeStaticTypeWarningCodeTest() {
    }
}

export class properties {
}
