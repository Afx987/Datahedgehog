/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/checker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CheckerTest);
        defineReflectiveTests(CheckerTest_Driver);
    });
};
export namespace CheckerTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'CheckerTest';
    export type Interface = Omit<CheckerTest, Constructors>;
}
@DartClass
export class CheckerTest extends lib3.AbstractStrongTest {
    test_awaitForInCastsStreamElementToVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';\n\nabstract class MyStream<T> extends Stream<T> {\n  factory MyStream() => null;\n}\n\nmain() async {\n  // Don\'t choke if sequence is not stream.\n  await for (var i in /*error:FOR_IN_OF_INVALID_TYPE*/1234) {}\n\n  // Dynamic cast.\n  await for (String /*info:DYNAMIC_CAST*/s in new MyStream<dynamic>()) {}\n\n  // Identity cast.\n  await for (String s in new MyStream<String>()) {}\n\n  // Untyped.\n  await for (var s in new MyStream<String>()) {}\n\n  // Downcast.\n  await for (int /*info:DOWN_CAST_IMPLICIT*/i in new MyStream<num>()) {}\n}\n');
        } )());
    }

    test_awaitForInCastsSupertypeSequenceToStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() async {\n  dynamic d;\n  await for (var i in /*info:DYNAMIC_CAST*/d) {}\n\n  Object o;\n  await for (var i in /*info:DOWN_CAST_IMPLICIT*/o) {}\n}\n');
        } )());
    }

    test_binaryAndIndexOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  A operator *(B b) => null;\n  A operator /(B b) => null;\n  A operator ~/(B b) => null;\n  A operator %(B b) => null;\n  A operator +(B b) => null;\n  A operator -(B b) => null;\n  A operator <<(B b) => null;\n  A operator >>(B b) => null;\n  A operator &(B b) => null;\n  A operator ^(B b) => null;\n  A operator |(B b) => null;\n  A operator[](B b) => null;\n}\n\nclass B {\n  A operator -(B b) => null;\n}\n\nfoo() => new A();\n\ntest() {\n  A a = new A();\n  B b = new B();\n  var c = foo();\n  a = a * b;\n  a = a * /*info:DYNAMIC_CAST*/c;\n  a = a / b;\n  a = a ~/ b;\n  a = a % b;\n  a = a + b;\n  a = a + /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/a;\n  a = a - b;\n  b = /*error:INVALID_ASSIGNMENT*/b - b;\n  a = a << b;\n  a = a >> b;\n  a = a & b;\n  a = a ^ b;\n  a = a | b;\n  c = (/*info:DYNAMIC_INVOKE*/c + b);\n\n  String x = \'hello\';\n  int y = 42;\n  x = x + x;\n  x = x + /*info:DYNAMIC_CAST*/c;\n  x = x + /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/y;\n\n  bool p = true;\n  p = p && p;\n  p = p && /*info:DYNAMIC_CAST*/c;\n  p = (/*info:DYNAMIC_CAST*/c) && p;\n  p = (/*info:DYNAMIC_CAST*/c) && /*info:DYNAMIC_CAST*/c;\n  p = /*error:NON_BOOL_OPERAND*/y && p;\n  p = c == y;\n\n  a = a[b];\n  a = a[/*info:DYNAMIC_CAST*/c];\n  c = (/*info:DYNAMIC_INVOKE*/c[b]);\n  a[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/y];\n}\n');
        } )());
    }

    test_callMethodOnFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f(int x) => print(x);\nmain() {\n  f.call(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/\'hi\');\n}\n    ');
        } )());
    }

    test_castsInConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {\n  bool b = true;\n  num x = b ? 1 : 2.3;\n  int y = /*info:ASSIGNMENT_CAST*/b ? 1 : 2.3;\n  String z = !b ? "hello" : null;\n  z = b ? null : "hello";\n}\n');
        } )());
    }

    test_castsInConstantContexts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  static const num n = 3.0;\n  // The severe error is from constant evaluation where we know the\n  // concrete type.\n  static const int /*error:VARIABLE_TYPE_MISMATCH*/i = /*info:ASSIGNMENT_CAST*/n;\n  final int fi;\n  const A(num a) : this.fi = /*info:DOWN_CAST_IMPLICIT*/a;\n}\nclass B extends A {\n  const B(Object a) : super(/*info:DOWN_CAST_IMPLICIT*/a);\n}\nvoid foo(Object o) {\n  var a = const A(/*info:DOWN_CAST_IMPLICIT, error:CONST_WITH_NON_CONSTANT_ARGUMENT, error:INVALID_CONSTANT*/o);\n}\n');
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class Base implements I1 {}\n\nclass T1 extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE*/Base\n    implements I1 {}\n\nclass T1 extends Base {\n    // not reported technically because if the class is concrete,\n    // it should implement all its interfaces and hence it is\n    // sufficient to check overrides against it.\n    m(B a) {}\n}\n');
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 implements I1 {}\n\nclass T1 implements I2 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_classOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class M1 {\n    m(A a);\n}\nabstract class I2 extends Object with M1 {}\n\nclass T1 implements I2 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_classOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 extends I1 {}\n\nclass T1 implements I2 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_compoundAssignment_returnsDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Foo {\n  operator +(other) => null;\n}\n\nmain() {\n  var foo = new Foo();\n  foo = /*info:DYNAMIC_CAST*/foo + 1;\n  /*info:DYNAMIC_CAST*/foo += 1;\n}\n    ');
        } )());
    }

    test_compoundAssignments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  A operator *(B b) => null;\n  A operator /(B b) => null;\n  A operator ~/(B b) => null;\n  A operator %(B b) => null;\n  A operator +(B b) => null;\n  A operator -(B b) => null;\n  A operator <<(B b) => null;\n  A operator >>(B b) => null;\n  A operator &(B b) => null;\n  A operator ^(B b) => null;\n  A operator |(B b) => null;\n  D operator [](B index) => null;\n  void operator []=(B index, D value) => null;\n}\n\nclass B {\n  A operator -(B b) => null;\n}\n\nclass D {\n  D operator +(D d) => null;\n}\n\nclass SubA extends A {}\nclass SubSubA extends SubA {}\n\nfoo() => new A();\n\ntest() {\n  int x = 0;\n  x += 5;\n  x += /*error:INVALID_ASSIGNMENT*/3.14;\n\n  double y = 0.0;\n  y += 5;\n  y += 3.14;\n\n  num z = 0;\n  z += 5;\n  z += 3.14;\n\n  x = /*info:DOWN_CAST_IMPLICIT*/x + z;\n  /*info:DOWN_CAST_IMPLICIT_ASSIGN*/x += z;\n  y = y + z;\n  y += z;\n\n  dynamic w = 42;\n  /*info:DOWN_CAST_IMPLICIT_ASSIGN*/x += /*info:DYNAMIC_CAST*/w;\n  y += /*info:DYNAMIC_CAST*/w;\n  z += /*info:DYNAMIC_CAST*/w;\n\n  A a = new A();\n  B b = new B();\n  var c = foo();\n  a = a * b;\n  a *= b;\n  a *= /*info:DYNAMIC_CAST*/c;\n  a /= b;\n  a ~/= b;\n  a %= b;\n  a += b;\n  a += /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/a;\n  a -= b;\n  b -= /*error:INVALID_ASSIGNMENT*/b;\n  a <<= b;\n  a >>= b;\n  a &= b;\n  a ^= b;\n  a |= b;\n  /*info:DYNAMIC_INVOKE*/c += b;\n\n  SubA sa;\n  /*info:DOWN_CAST_IMPLICIT_ASSIGN*/sa += b;\n  SubSubA ssa = /*info:ASSIGNMENT_CAST,info:DOWN_CAST_IMPLICIT_ASSIGN*/sa += b;\n\n  var d = new D();\n  a[b] += d;\n  a[/*info:DYNAMIC_CAST*/c] += d;\n  a[/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/z] += d;\n  a[b] += /*info:DYNAMIC_CAST*/c;\n  a[b] += /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/z;\n  /*info:DYNAMIC_INVOKE,info:DYNAMIC_INVOKE*/c[b] += d;\n}\n');
        } )());
    }

    test_constantGenericTypeArg_explict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Equality<R> {}\nabstract class EqualityBase<R> implements Equality<R> {\n  final C<R> c = const C<R>();\n  const EqualityBase();\n}\nclass DefaultEquality<S> extends EqualityBase<S> {\n  const DefaultEquality();\n}\nclass SetEquality<T> implements Equality<T> {\n  final Equality<T> field = const DefaultEquality<T>();\n  const SetEquality([Equality<T> inner = const DefaultEquality<T>()]);\n}\nclass C<Q> {\n  final List<Q> list = const <Q>[];\n  final Map<Q, Iterable<Q>> m =  const <Q, Iterable<Q>>{};\n  const C();\n}\nmain() {\n  const SetEquality<String>();\n}\n    ');
        } )());
    }

    test_constantGenericTypeArg_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Equality<Q> {}\nabstract class EqualityBase<R> implements Equality<R> {\n  final C<R> c = /*info:INFERRED_TYPE_ALLOCATION*/const C();\n  const EqualityBase();\n}\nclass DefaultEquality<S> extends EqualityBase<S> {\n  const DefaultEquality();\n}\nclass SetEquality<T> implements Equality<T> {\n  final Equality<T> field = /*info:INFERRED_TYPE_ALLOCATION*/const DefaultEquality();\n  const SetEquality([Equality<T> inner = /*info:INFERRED_TYPE_ALLOCATION*/const DefaultEquality()]);\n}\nclass C<Q> {\n  final List<Q> list = /*info:INFERRED_TYPE_LITERAL*/const [];\n  final Map<Q, Iterable<Q>> m =  /*info:INFERRED_TYPE_LITERAL*/const {};\n  const C();\n}\nmain() {\n  const SetEquality<String>();\n}\n    ');
        } )());
    }

    test_constructorInvalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  B({ /*error:FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR*/this.test: 1.0 }) {}\n  final double test = 0.0;\n}\n');
        } )());
    }

    test_constructors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('const num z = 25;\nObject obj = "world";\n\nclass A {\n  int x;\n  String y;\n\n  A(this.x) : this.y = /*error:FIELD_INITIALIZER_NOT_ASSIGNABLE*/42;\n\n  A.c1(p): this.x = /*info:DOWN_CAST_IMPLICIT*/z, this.y = /*info:DYNAMIC_CAST*/p;\n\n  A.c2(this.x, this.y);\n\n  A.c3(/*error:INVALID_PARAMETER_DECLARATION*/num this.x, String this.y);\n}\n\nclass B extends A {\n  B() : super(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello");\n\n  B.c2(int x, String y) : super.c2(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/y,\n                                   /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/x);\n\n  B.c3(num x, Object y) : super.c3(x, /*info:DOWN_CAST_IMPLICIT*/y);\n}\n\nvoid main() {\n   A a = new A.c2(/*info:DOWN_CAST_IMPLICIT*/z, /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/z);\n   var b = new B.c2(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/"hello", /*info:DOWN_CAST_IMPLICIT*/obj);\n}\n');
        } )());
    }

    test_conversionAndDynamicInvoke() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('dynamic toString = (int x) => x + 42;\ndynamic hashCode = "hello";\n',{
                name : '/helper.dart'});
            await this.checkFile('import \'helper.dart\' as helper;\n\nclass A {\n  String x = "hello world";\n\n  void baz1(y) { x + /*info:DYNAMIC_CAST*/y; }\n  static baz2(y) => /*info:DYNAMIC_INVOKE*/y + y;\n}\n\nvoid foo(String str) {\n  print(str);\n}\n\nclass B {\n  String toString([int arg]) => arg.toString();\n}\n\nvoid bar(a) {\n  foo(/*info:DYNAMIC_CAST,info:DYNAMIC_INVOKE*/a.x);\n}\n\nbaz() => new B();\n\ntypedef DynFun(x);\ntypedef StrFun(String x);\n\nvar bar1 = bar;\n\nvoid main() {\n  var a = new A();\n  bar(a);\n  (/*info:DYNAMIC_INVOKE*/bar1(a));\n  var b = bar;\n  (/*info:DYNAMIC_INVOKE*/b(a));\n  var f1 = foo;\n  f1("hello");\n  dynamic f2 = foo;\n  (/*info:DYNAMIC_INVOKE*/f2("hello"));\n  DynFun f3 = foo;\n  (/*info:DYNAMIC_INVOKE*/f3("hello"));\n  (/*info:DYNAMIC_INVOKE*/f3(42));\n  StrFun f4 = foo;\n  f4("hello");\n  a.baz1("hello");\n  var b1 = a.baz1;\n  (/*info:DYNAMIC_INVOKE*/b1("hello"));\n  A.baz2("hello");\n  var b2 = A.baz2;\n  (/*info:DYNAMIC_INVOKE*/b2("hello"));\n\n  dynamic a1 = new B();\n  (/*info:DYNAMIC_INVOKE*/a1.x);\n  a1.toString();\n  (/*info:DYNAMIC_INVOKE*/a1.toString(42));\n  var toStringClosure = a1.toString;\n  (/*info:DYNAMIC_INVOKE*/a1.toStringClosure());\n  (/*info:DYNAMIC_INVOKE*/a1.toStringClosure(42));\n  (/*info:DYNAMIC_INVOKE*/a1.toStringClosure("hello"));\n  a1.hashCode;\n\n  dynamic toString = () => null;\n  (/*info:DYNAMIC_INVOKE*/toString());\n\n  (/*info:DYNAMIC_INVOKE*/helper.toString());\n  var toStringClosure2 = helper.toString;\n  (/*info:DYNAMIC_INVOKE*/toStringClosure2());\n  int hashCode = /*info:DYNAMIC_CAST*/helper.hashCode;\n\n  baz().toString();\n  baz().hashCode;\n}\n');
        } )());
    }

    test_covariantOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nclass C {\n  num f(num x) => x;\n}\nclass D extends C {\n  int f(@checked int x) => x;\n}\nclass E extends D {\n  int f(Object x) => /*info:DOWN_CAST_IMPLICIT*/x;\n}\nclass F extends E {\n  int f(@checked int x) => x;\n}\nclass G extends E implements D {}\n\nclass D_error extends C {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(int x) => x;\n}\nclass E_error extends D {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(@checked double x) => 0;\n}\nclass F_error extends E {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(@checked double x) => 0;\n}\nclass G_error extends E implements D {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(@checked double x) => 0;\n}\n    ');
        } )());
    }

    test_covariantOverride_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nclass A {\n  get foo => \'\';\n  set foo(_) {}\n}\n\nclass B extends A {\n  @checked num foo;\n}\nclass C extends A {\n  @checked @virtual num foo;\n}\nclass D extends C {\n  @virtual int foo;\n}\nclass E extends D {\n  @virtual /*error:INVALID_METHOD_OVERRIDE*/num foo;\n}\n    ');
        } )());
    }

    test_covariantOverride_leastUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import "meta.dart";\nabstract class Top {}\nabstract class Left implements Top {}\nabstract class Right implements Top {}\nabstract class Bottom implements Left, Right {}\n\nabstract class TakesLeft {\n  m(Left x);\n}\nabstract class TakesRight {\n  m(Right x);\n}\nabstract class TakesTop implements TakesLeft, TakesRight {\n  m(Top x); // works today\n}\nabstract class TakesBottom implements TakesLeft, TakesRight {\n  // LUB(Left, Right) == Top, so this is an implicit cast from Top to Bottom.\n  m(@checked Bottom x);\n}\n    ');
        } )());
    }

    test_covariantOverride_markerIsInherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nclass C {\n  num f(@checked num x) => x;\n}\nclass D extends C {\n  int f(int x) => x;\n}\nclass E extends D {\n  int f(Object x) => /*info:DOWN_CAST_IMPLICIT*/x;\n}\nclass F extends E {\n  int f(int x) => x;\n}\nclass G extends E implements D {}\n\nclass D_error extends C {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(String x) => 0;\n}\nclass E_error extends D {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(double x) => 0;\n}\nclass F_error extends E {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(double x) => 0;\n}\nclass G_error extends E implements D {\n  /*error:INVALID_METHOD_OVERRIDE*/int f(double x) => 0;\n}\n    ');
        } )());
    }

    test_dynamicInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef dynamic A(dynamic x);\nclass B {\n  int call(int x) => x;\n  double col(double x) => x;\n}\nvoid main() {\n  {\n    B f = new B();\n    int x;\n    double y;\n    x = f(3);\n    x = /*error:INVALID_ASSIGNMENT*/f.col(3.0);\n    y = /*error:INVALID_ASSIGNMENT*/f(3);\n    y = f.col(3.0);\n    f(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3.0);\n    f.col(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n  }\n  {\n    Function f = new B();\n    int x;\n    double y;\n    x = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f(3);\n    x = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f.col(3.0);\n    y = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f(3);\n    y = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f.col(3.0);\n    /*info:DYNAMIC_INVOKE*/f(3.0);\n    // Through type propagation, we know f is actually a B, hence the\n    // hint.\n    /*info:DYNAMIC_INVOKE*/f.col(3);\n  }\n  {\n    A f = new B();\n    int x;\n    double y;\n    x = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f(3);\n    y = /*info:DYNAMIC_CAST, info:DYNAMIC_INVOKE*/f(3);\n    /*info:DYNAMIC_INVOKE*/f(3.0);\n  }\n  {\n    dynamic g = new B();\n    /*info:DYNAMIC_INVOKE*/g.call(32.0);\n    /*info:DYNAMIC_INVOKE*/g.col(42.0);\n    /*info:DYNAMIC_INVOKE*/g.foo(42.0);\n    /*info:DYNAMIC_INVOKE*/g.x;\n    A f = new B();\n    /*info:DYNAMIC_INVOKE*/f.col(42.0);\n    /*info:DYNAMIC_INVOKE*/f.foo(42.0);\n    /*info:DYNAMIC_INVOKE*/f./*error:UNDEFINED_GETTER*/x;\n  }\n}\n');
        } )());
    }

    test_factoryConstructorDowncast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Animal {\n  Animal();\n  factory Animal.cat() => new Cat();\n}\n\nclass Cat extends Animal {}\n\nvoid main() {\n  Cat c = /*info:ASSIGNMENT_CAST*/new Animal.cat();\n  c = /*error:INVALID_CAST_NEW_EXPR*/new Animal();\n}');
        } )());
    }

    test_fieldFieldOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nclass Base {\n  B f1;\n  B f2;\n  B f3;\n  B f4;\n}\n\nclass Child extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A f1; // invalid for getter\n  /*error:INVALID_METHOD_OVERRIDE*/C f2; // invalid for setter\n  var f3;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic f4;\n}\n\nclass Child2 implements Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A f1; // invalid for getter\n  /*error:INVALID_METHOD_OVERRIDE*/C f2; // invalid for setter\n  var f3;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic f4;\n}\n');
        } )());
    }

    test_fieldGetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nabstract class Base {\n  B f1;\n  B f2;\n  B f3;\n  B f4;\n}\n\nclass Child extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A get f1 => null;\n  C get f2 => null;\n  get f3 => null;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic get f4 => null;\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR*/Child2 implements Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A get f1 => null;\n  C get f2 => null;\n  get f3 => null;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic get f4 => null;\n}\n');
        } )());
    }

    test_fieldOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);\nclass F {\n  final ToVoid<dynamic> f = null;\n  final ToVoid<int> g = null;\n}\n\nclass G extends F {\n  final ToVoid<int> f = null;\n  /*error:INVALID_METHOD_OVERRIDE*/final ToVoid<dynamic> g = null;\n}\n\nclass H implements F {\n  final ToVoid<int> f = null;\n  /*error:INVALID_METHOD_OVERRIDE*/final ToVoid<dynamic> g = null;\n}\n ');
        } )());
    }

    test_fieldOverride_virtual() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nclass C {\n  @virtual int x;\n}\nclass OverrideGetter extends C {\n  int get x => 42;\n}\nclass OverrideSetter extends C {\n  set x(int v) {}\n}\nclass OverrideBoth extends C {\n  int get x => 42;\n  set x(int v) {}\n}\nclass OverrideWithField extends C {\n  int x;\n\n  // expose the hidden storage slot\n  int get superX => super.x;\n  set superX(int v) { super.x = v; }\n}\nclass VirtualNotInherited extends OverrideWithField {\n  int x;\n}\n    ');
        } )());
    }

    test_fieldSetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nclass Base {\n  B f1;\n  B f2;\n  B f3;\n  B f4;\n  B f5;\n}\n\nclass Child extends Base {\n  B get f1 => null;\n  B get f2 => null;\n  B get f3 => null;\n  B get f4 => null;\n  B get f5 => null;\n\n  void set f1(A value) {}\n  /*error:INVALID_METHOD_OVERRIDE*/void set f2(C value) {}\n  void set f3(value) {}\n  void set f4(dynamic value) {}\n  set f5(B value) {}\n}\n\nclass Child2 implements Base {\n  B get f1 => null;\n  B get f2 => null;\n  B get f3 => null;\n  B get f4 => null;\n  B get f5 => null;\n\n  void set f1(A value) {}\n  /*error:INVALID_METHOD_OVERRIDE*/void set f2(C value) {}\n  void set f3(value) {}\n  void set f4(dynamic value) {}\n  set f5(B value) {}\n}\n');
        } )());
    }

    test_forInCastsIterateElementToVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {\n  // Don\'t choke if sequence is not iterable.\n  for (var i in /*error:FOR_IN_OF_INVALID_TYPE*/1234) {}\n\n  // Dynamic cast.\n  for (String /*info:DYNAMIC_CAST*/s in <dynamic>[]) {}\n\n  // Identity cast.\n  for (String s in <String>[]) {}\n\n  // Untyped.\n  for (var s in <String>[]) {}\n\n  // Downcast.\n  for (int /*info:DOWN_CAST_IMPLICIT*/i in <num>[]) {}\n}\n');
        } )());
    }

    test_forInCastsSupertypeSequenceToIterate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {\n  dynamic d;\n  for (var i in /*info:DYNAMIC_CAST*/d) {}\n\n  Object o;\n  for (var i in /*info:DOWN_CAST_IMPLICIT*/o) {}\n}\n');
        } )());
    }

    test_forLoopVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('foo() {\n  for (int i = 0; i < 10; i++) {\n    i = /*error:INVALID_ASSIGNMENT*/"hi";\n  }\n}\nbar() {\n  for (var i = 0; i < 10; i++) {\n    int j = i + 1;\n  }\n}\n');
        } )());
    }

    test_functionModifiers_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';\nimport \'dart:math\' show Random;\n\ndynamic x;\n\nfoo1() async => x;\nFuture foo2() async => x;\nFuture<int> foo3() async => /*info:DYNAMIC_CAST*/x;\nFuture<int> foo4() async => new Future<int>.value(x);\nFuture<int> foo5() async =>\n    /*error:RETURN_OF_INVALID_TYPE*/new Future<String>.value(x);\n\nbar1() async { return x; }\nFuture bar2() async { return x; }\nFuture<int> bar3() async { return /*info:DYNAMIC_CAST*/x; }\nFuture<int> bar4() async { return new Future<int>.value(x); }\nFuture<int> bar5() async {\n  return /*error:RETURN_OF_INVALID_TYPE*/new Future<String>.value(x);\n}\n\nint y;\nFuture<int> z;\n\nbaz() async {\n  int a = /*info:DYNAMIC_CAST*/await x;\n  int b = await y;\n  int c = await z;\n  String d = /*error:INVALID_ASSIGNMENT*/await z;\n}\n\nFuture<bool> get issue_ddc_264 async {\n  await 42;\n  if (new Random().nextBool()) {\n    return true;\n  } else {\n    return new Future<bool>.value(false);\n  }\n}\n\n\nFuture<String> issue_sdk_26404() async {\n  return (/*info:DOWN_CAST_COMPOSITE*/(1 > 0) ? new Future<String>.value(\'hello\') : "world");\n}\n');
        } )());
    }

    test_functionModifiers_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';\n\ndynamic x;\n\nStream<int> intStream;\n\nabstract class MyStream<T> extends Stream<T> {\n  factory MyStream() => null;\n}\n\nbar1() async* { yield x; }\nStream bar2() async* { yield x; }\nStream<int> bar3() async* { yield /*info:DYNAMIC_CAST*/x; }\nStream<int> bar4() async* { yield /*error:YIELD_OF_INVALID_TYPE*/intStream; }\n\nbaz1() async* { yield* /*info:DYNAMIC_CAST*/x; }\nStream baz2() async* { yield* /*info:DYNAMIC_CAST*/x; }\nStream<int> baz3() async* { yield* /*info:DYNAMIC_CAST*/x; }\nStream<int> baz4() async* { yield* intStream; }\nStream<int> baz5() async* { yield* /*info:INFERRED_TYPE_ALLOCATION*/new MyStream(); }\n');
        } )());
    }

    test_functionModifiers_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('dynamic x;\n\nbar1() sync* { yield x; }\nIterable bar2() sync* { yield x; }\nIterable<int> bar3() sync* { yield /*info:DYNAMIC_CAST*/x; }\nIterable<int> bar4() sync* { yield /*error:YIELD_OF_INVALID_TYPE*/bar3(); }\n\nbaz1() sync* { yield* /*info:DYNAMIC_CAST*/x; }\nIterable baz2() sync* { yield* /*info:DYNAMIC_CAST*/x; }\nIterable<int> baz3() sync* { yield* /*info:DYNAMIC_CAST*/x; }\nIterable<int> baz4() sync* { yield* bar3(); }\nIterable<int> baz5() sync* { yield* /*info:INFERRED_TYPE_ALLOCATION*/new List(); }\n');
        } )());
    }

    test_functionTypingAndSubtyping_classes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef A Top(B x);   // Top of the lattice\ntypedef B Left(B x);  // Left branch\ntypedef B Left2(B x); // Left branch\ntypedef A Right(A x); // Right branch\ntypedef B Bot(A x);   // Bottom of the lattice\n\nB left(B x) => x;\nB bot_(A x) => /*info:DOWN_CAST_IMPLICIT*/x;\nB bot(A x) => x as B;\nA top(B x) => x;\nA right(A x) => x;\n\nvoid main() {\n  { // Check typedef equality\n    Left f = left;\n    Left2 g = f;\n  }\n  {\n    Top f;\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Left f;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Right f;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Bot f;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_CAST_FUNCTION*/left;\n    f = /*error:INVALID_CAST_FUNCTION*/right;\n    f = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\n\ntypedef dynamic Top(dynamic x);     // Top of the lattice\ntypedef dynamic Left(A x);          // Left branch\ntypedef A Right(dynamic x);         // Right branch\ntypedef A Bottom(A x);              // Bottom of the lattice\n\nvoid main() {\n  Top top;\n  Left left;\n  Right right;\n  Bottom bot;\n  {\n    Top f;\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Left f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Right f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Bottom f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = /*info:DOWN_CAST_COMPOSITE*/left;\n    f = /*info:DOWN_CAST_COMPOSITE*/right;\n    f = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_dynamic_knownFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\n\ntypedef dynamic BotTop(dynamic x);\ntypedef dynamic ATop(A x);\ntypedef A BotA(dynamic x);\ntypedef A AA(A x);\ntypedef A TopA(Object x);\ntypedef dynamic TopTop(Object x);\n\ndynamic aTop(A x) => x;\nA aa(A x) => x;\ndynamic topTop(dynamic x) => x;\nA topA(dynamic x) => /*info:DYNAMIC_CAST*/x;\nvoid apply/*<T>*/(/*=T*/ f0, /*=T*/ f1, /*=T*/ f2,\n                  /*=T*/ f3, /*=T*/ f4, /*=T*/ f5) {}\nvoid main() {\n  BotTop botTop;\n  BotA botA;\n  {\n    BotTop f;\n    f = topA;\n    f = topTop;\n    f = aa;\n    f = aTop;\n    f = botA;\n    f = botTop;\n    apply/*<BotTop>*/(\n        topA,\n        topTop,\n        aa,\n        aTop,\n        botA,\n        botTop\n                      );\n    apply/*<BotTop>*/(\n        (dynamic x) => new A(),\n        (dynamic x) => (x as Object),\n        (A x) => x,\n        (A x) => null,\n        botA,\n        botTop\n                      );\n  }\n  {\n    ATop f;\n    f = topA;\n    f = topTop;\n    f = aa;\n    f = aTop;\n    f = /*error:INVALID_ASSIGNMENT*/botA;\n    f = /*info:DOWN_CAST_COMPOSITE*/botTop;\n    apply/*<ATop>*/(\n        topA,\n        topTop,\n        aa,\n        aTop,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n    apply/*<ATop>*/(\n        (dynamic x) => new A(),\n        (dynamic x) => (x as Object),\n        (A x) => x,\n        (A x) => null,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n  }\n  {\n    BotA f;\n    f = topA;\n    f = /*error:INVALID_ASSIGNMENT*/topTop;\n    f = aa;\n    f = /*error:INVALID_ASSIGNMENT*/aTop;\n    f = botA;\n    f = /*info:DOWN_CAST_COMPOSITE*/botTop;\n    apply/*<BotA>*/(\n        topA,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/topTop,\n        aa,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/aTop,\n        botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n    apply/*<BotA>*/(\n        (dynamic x) => new A(),\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(dynamic x) => (x as Object),\n        (A x) => x,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(A x) => (/*info:UNNECESSARY_CAST*/x as Object),\n        botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n  }\n  {\n    AA f;\n    f = topA;\n    f = /*error:INVALID_ASSIGNMENT*/topTop;\n    f = aa;\n    f = /*error:INVALID_CAST_FUNCTION*/aTop; // known function\n    f = /*info:DOWN_CAST_COMPOSITE*/botA;\n    f = /*info:DOWN_CAST_COMPOSITE*/botTop;\n    apply/*<AA>*/(\n        topA,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/topTop,\n        aa,\n        /*error:INVALID_CAST_FUNCTION*/aTop, // known function\n        /*info:DOWN_CAST_COMPOSITE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                  );\n    apply/*<AA>*/(\n        (dynamic x) => new A(),\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(dynamic x) => (x as Object),\n        (A x) => x,\n        /*error:INVALID_CAST_FUNCTION_EXPR*/(A x) => (/*info:UNNECESSARY_CAST*/x as Object), // known function\n        /*info:DOWN_CAST_COMPOSITE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                  );\n  }\n  {\n    TopTop f;\n    f = topA;\n    f = topTop;\n    f = /*error:INVALID_ASSIGNMENT*/aa;\n    f = /*error:INVALID_CAST_FUNCTION*/aTop; // known function\n    f = /*error:INVALID_ASSIGNMENT*/botA;\n    f = /*info:DOWN_CAST_COMPOSITE*/botTop;\n    apply/*<TopTop>*/(\n        topA,\n        topTop,\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/aa,\n        /*error:INVALID_CAST_FUNCTION*/aTop, // known function\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                      );\n    apply/*<TopTop>*/(\n        (dynamic x) => new A(),\n        (dynamic x) => (x as Object),\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/(A x) => x,\n        /*error:INVALID_CAST_FUNCTION_EXPR*/(A x) => (/*info:UNNECESSARY_CAST*/x as Object), // known function\n        /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                      );\n  }\n  {\n    TopA f;\n    f = topA;\n    f = /*error:INVALID_CAST_FUNCTION*/topTop; // known function\n    f = /*error:INVALID_CAST_FUNCTION*/aa; // known function\n    f = /*error:INVALID_CAST_FUNCTION*/aTop; // known function\n    f = /*info:DOWN_CAST_COMPOSITE*/botA;\n    f = /*info:DOWN_CAST_COMPOSITE*/botTop;\n    apply/*<TopA>*/(\n        topA,\n        /*error:INVALID_CAST_FUNCTION*/topTop, // known function\n        /*error:INVALID_CAST_FUNCTION*/aa, // known function\n        /*error:INVALID_CAST_FUNCTION*/aTop, // known function\n        /*info:DOWN_CAST_COMPOSITE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n    apply/*<TopA>*/(\n        (dynamic x) => new A(),\n        /*error:INVALID_CAST_FUNCTION_EXPR*/(dynamic x) => (x as Object), // known function\n        /*error:INVALID_CAST_FUNCTION_EXPR*/(A x) => x, // known function\n        /*error:INVALID_CAST_FUNCTION_EXPR*/(A x) => (/*info:UNNECESSARY_CAST*/x as Object), // known function\n        /*info:DOWN_CAST_COMPOSITE*/botA,\n        /*info:DOWN_CAST_COMPOSITE*/botTop\n                    );\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_dynamicFunctions_closuresAreNotFuzzy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void takesF(void f(int x)) {}\n\ntypedef void TakesInt(int x);\n\nvoid update(_) {}\nvoid updateOpt([_]) {}\nvoid updateOptNum([num x]) {}\n\nclass Callable {\n  void call(_) {}\n}\n\nclass A {\n  TakesInt f;\n  A(TakesInt g) {\n    f = update;\n    f = updateOpt;\n    f = updateOptNum;\n    f = new Callable();\n  }\n  TakesInt g(bool a, bool b) {\n    if (a) {\n      return update;\n    } else if (b) {\n      return updateOpt;\n    } else if (a) {\n      return updateOptNum;\n    } else {\n      return new Callable();\n    }\n  }\n}\n\nvoid test0() {\n  takesF(update);\n  takesF(updateOpt);\n  takesF(updateOptNum);\n  takesF(new Callable());\n  TakesInt f;\n  f = update;\n  f = updateOpt;\n  f = updateOptNum;\n  f = new Callable();\n  new A(update);\n  new A(updateOpt);\n  new A(updateOptNum);\n  new A(new Callable());\n}\n\nvoid test1() {\n  void takesF(f(int x)) => null;\n  takesF((dynamic y) => 3);\n}\n\nvoid test2() {\n  int x;\n  int f/*<T>*/(/*=T*/ t, callback(/*=T*/ x)) { return 3; }\n  f(x, (y) => 3);\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_functionLiteralVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\nA top(B x) => x;\nB left(B x) => x;\nA right(A x) => x;\nB bot(A x) => x as B;\n\nvoid main() {\n  {\n    Function2<B, A> f;\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<B, B> f; // left\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Function2<A, A> f; // right\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<A, B> f;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_CAST_FUNCTION*/left;\n    f = /*error:INVALID_CAST_FUNCTION*/right;\n    f = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_functionVariableVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\nvoid main() {\n  {\n    Function2<B, A> top;\n    Function2<B, B> left;\n    Function2<A, A> right;\n    Function2<A, B> bot;\n\n    top = right;\n    top = bot;\n    top = top;\n    top = left;\n\n    left = /*info:DOWN_CAST_COMPOSITE*/top;\n    left = left;\n    left = /*error:INVALID_ASSIGNMENT*/right;\n    left = bot;\n\n    right = /*info:DOWN_CAST_COMPOSITE*/top;\n    right = /*error:INVALID_ASSIGNMENT*/left;\n    right = right;\n    right = bot;\n\n    bot = /*info:DOWN_CAST_COMPOSITE*/top;\n    bot = /*info:DOWN_CAST_COMPOSITE*/left;\n    bot = /*info:DOWN_CAST_COMPOSITE*/right;\n    bot = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\ntypedef A BToA(B x);  // Top of the base lattice\ntypedef B AToB(A x);  // Bot of the base lattice\n\nBToA top(AToB f) => f;\nAToB left(AToB f) => f;\nBToA right(BToA f) => f;\nAToB bot_(BToA f) => /*info:DOWN_CAST_COMPOSITE*/f;\nAToB bot(BToA f) => f as AToB;\n\nvoid main() {\n  {\n    Function2<AToB, BToA> f; // Top\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<AToB, AToB> f; // Left\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Function2<BToA, BToA> f; // Right\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<BToA, AToB> f; // Bot\n    f = bot;\n    f = /*error:INVALID_CAST_FUNCTION*/left;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_CAST_FUNCTION*/right;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\ntypedef A BToA(B x);  // Top of the base lattice\ntypedef B AToB(A x);  // Bot of the base lattice\n\nFunction2<B, A> top(AToB f) => f;\nFunction2<A, B> left(AToB f) => f;\nFunction2<B, A> right(BToA f) => f;\nFunction2<A, B> bot_(BToA f) => /*info:DOWN_CAST_COMPOSITE*/f;\nFunction2<A, B> bot(BToA f) => f as Function2<A, B>;\n\nvoid main() {\n  {\n    Function2<AToB, BToA> f; // Top\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<AToB, AToB> f; // Left\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Function2<BToA, BToA> f; // Right\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<BToA, AToB> f; // Bot\n    f = bot;\n    f = /*error:INVALID_CAST_FUNCTION*/left;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_CAST_FUNCTION*/right;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\ntypedef A BToA(B x);  // Top of the base lattice\ntypedef B AToB(A x);  // Bot of the base lattice\n\nBToA top(Function2<A, B> f) => f;\nAToB left(Function2<A, B> f) => f;\nBToA right(Function2<B, A> f) => f;\nAToB bot_(Function2<B, A> f) => /*info:DOWN_CAST_COMPOSITE*/f;\nAToB bot(Function2<B, A> f) => f as AToB;\n\nvoid main() {\n  {\n    Function2<AToB, BToA> f; // Top\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<AToB, AToB> f; // Left\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Function2<BToA, BToA> f; // Right\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Function2<BToA, AToB> f; // Bot\n    f = bot;\n    f = /*error:INVALID_CAST_FUNCTION*/left;\n    f = /*error:INVALID_CAST_FUNCTION*/top;\n    f = /*error:INVALID_CAST_FUNCTION*/right;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\ntypedef T Function2<S, T>(S z);\n\nvoid main() {\n  {\n    Function2<Function2<A, B>, Function2<B, A>> top;\n    Function2<Function2<B, A>, Function2<B, A>> right;\n    Function2<Function2<A, B>, Function2<A, B>> left;\n    Function2<Function2<B, A>, Function2<A, B>> bot;\n\n    top = right;\n    top = bot;\n    top = top;\n    top = left;\n\n    left = /*info:DOWN_CAST_COMPOSITE*/top;\n    left = left;\n    left =\n        /*error:INVALID_ASSIGNMENT*/right;\n    left = bot;\n\n    right = /*info:DOWN_CAST_COMPOSITE*/top;\n    right =\n        /*error:INVALID_ASSIGNMENT*/left;\n    right = right;\n    right = bot;\n\n    bot = /*info:DOWN_CAST_COMPOSITE*/top;\n    bot = /*info:DOWN_CAST_COMPOSITE*/left;\n    bot = /*info:DOWN_CAST_COMPOSITE*/right;\n    bot = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_instanceMethodVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nclass C {\n  A top(B x) => x;\n  B left(B x) => x;\n  A right(A x) => x;\n  B bot(A x) => x as B;\n}\n\ntypedef T Function2<S, T>(S z);\n\nvoid main() {\n  C c = new C();\n  {\n    Function2<B, A> f;\n    f = c.top;\n    f = c.left;\n    f = c.right;\n    f = c.bot;\n  }\n  {\n    Function2<B, B> f;\n    f = /*info:DOWN_CAST_COMPOSITE*/c.top;\n    f = c.left;\n    f = /*error:INVALID_ASSIGNMENT*/c.right;\n    f = c.bot;\n  }\n  {\n    Function2<A, A> f;\n    f = /*info:DOWN_CAST_COMPOSITE*/c.top;\n    f = /*error:INVALID_ASSIGNMENT*/c.left;\n    f = c.right;\n    f = c.bot;\n  }\n  {\n    Function2<A, B> f;\n    f = /*info:DOWN_CAST_COMPOSITE*/c.top;\n    f = /*info:DOWN_CAST_COMPOSITE*/c.left;\n    f = /*info:DOWN_CAST_COMPOSITE*/c.right;\n    f = c.bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_intAndObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef Object Top(int x);      // Top of the lattice\ntypedef int Left(int x);        // Left branch\ntypedef int Left2(int x);       // Left branch\ntypedef Object Right(Object x); // Right branch\ntypedef int Bot(Object x);      // Bottom of the lattice\n\nObject globalTop(int x) => x;\nint globalLeft(int x) => x;\nObject globalRight(Object x) => x;\nint bot_(Object x) => /*info:DOWN_CAST_IMPLICIT*/x;\nint globalBot(Object x) => x as int;\n\nvoid main() {\n  // Note: use locals so we only know the type, not that it\'s a specific\n  // function declaration. (we can issue better errors in that case.)\n  var top = globalTop;\n  var left = globalLeft;\n  var right = globalRight;\n  var bot = globalBot;\n\n  { // Check typedef equality\n    Left f = left;\n    Left2 g = f;\n  }\n  {\n    Top f;\n    f = top;\n    f = left;\n    f = right;\n    f = bot;\n  }\n  {\n    Left f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = left;\n    f = /*error:INVALID_ASSIGNMENT*/right;\n    f = bot;\n  }\n  {\n    Right f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = /*error:INVALID_ASSIGNMENT*/left;\n    f = right;\n    f = bot;\n  }\n  {\n    Bot f;\n    f = /*info:DOWN_CAST_COMPOSITE*/top;\n    f = /*info:DOWN_CAST_COMPOSITE*/left;\n    f = /*info:DOWN_CAST_COMPOSITE*/right;\n    f = bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_namedAndOptionalParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\n\ntypedef A FR(A x);\ntypedef A FO([A x]);\ntypedef A FN({A x});\ntypedef A FRR(A x, A y);\ntypedef A FRO(A x, [A y]);\ntypedef A FRN(A x, {A n});\ntypedef A FOO([A x, A y]);\ntypedef A FNN({A x, A y});\ntypedef A FNNN({A z, A y, A x});\n\nvoid main() {\n   FR r;\n   FO o;\n   FN n;\n   FRR rr;\n   FRO ro;\n   FRN rn;\n   FOO oo;\n   FNN nn;\n   FNNN nnn;\n\n   r = r;\n   r = o;\n   r = /*error:INVALID_ASSIGNMENT*/n;\n   r = /*error:INVALID_ASSIGNMENT*/rr;\n   r = ro;\n   r = rn;\n   r = oo;\n   r = /*error:INVALID_ASSIGNMENT*/nn;\n   r = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   o = /*info:DOWN_CAST_COMPOSITE*/r;\n   o = o;\n   o = /*error:INVALID_ASSIGNMENT*/n;\n   o = /*error:INVALID_ASSIGNMENT*/rr;\n   o = /*error:INVALID_ASSIGNMENT*/ro;\n   o = /*error:INVALID_ASSIGNMENT*/rn;\n   o = oo;\n   o = /*error:INVALID_ASSIGNMENT*/nn;\n   o = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   n = /*error:INVALID_ASSIGNMENT*/r;\n   n = /*error:INVALID_ASSIGNMENT*/o;\n   n = n;\n   n = /*error:INVALID_ASSIGNMENT*/rr;\n   n = /*error:INVALID_ASSIGNMENT*/ro;\n   n = /*error:INVALID_ASSIGNMENT*/rn;\n   n = /*error:INVALID_ASSIGNMENT*/oo;\n   n = nn;\n   n = nnn;\n\n   rr = /*error:INVALID_ASSIGNMENT*/r;\n   rr = /*error:INVALID_ASSIGNMENT*/o;\n   rr = /*error:INVALID_ASSIGNMENT*/n;\n   rr = rr;\n   rr = ro;\n   rr = /*error:INVALID_ASSIGNMENT*/rn;\n   rr = oo;\n   rr = /*error:INVALID_ASSIGNMENT*/nn;\n   rr = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   ro = /*info:DOWN_CAST_COMPOSITE*/r;\n   ro = /*error:INVALID_ASSIGNMENT*/o;\n   ro = /*error:INVALID_ASSIGNMENT*/n;\n   ro = /*info:DOWN_CAST_COMPOSITE*/rr;\n   ro = ro;\n   ro = /*error:INVALID_ASSIGNMENT*/rn;\n   ro = oo;\n   ro = /*error:INVALID_ASSIGNMENT*/nn;\n   ro = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   rn = /*info:DOWN_CAST_COMPOSITE*/r;\n   rn = /*error:INVALID_ASSIGNMENT*/o;\n   rn = /*error:INVALID_ASSIGNMENT*/n;\n   rn = /*error:INVALID_ASSIGNMENT*/rr;\n   rn = /*error:INVALID_ASSIGNMENT*/ro;\n   rn = rn;\n   rn = /*error:INVALID_ASSIGNMENT*/oo;\n   rn = /*error:INVALID_ASSIGNMENT*/nn;\n   rn = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   oo = /*info:DOWN_CAST_COMPOSITE*/r;\n   oo = /*info:DOWN_CAST_COMPOSITE*/o;\n   oo = /*error:INVALID_ASSIGNMENT*/n;\n   oo = /*info:DOWN_CAST_COMPOSITE*/rr;\n   oo = /*info:DOWN_CAST_COMPOSITE*/ro;\n   oo = /*error:INVALID_ASSIGNMENT*/rn;\n   oo = oo;\n   oo = /*error:INVALID_ASSIGNMENT*/nn;\n   oo = /*error:INVALID_ASSIGNMENT*/nnn;\n\n   nn = /*error:INVALID_ASSIGNMENT*/r;\n   nn = /*error:INVALID_ASSIGNMENT*/o;\n   nn = /*info:DOWN_CAST_COMPOSITE*/n;\n   nn = /*error:INVALID_ASSIGNMENT*/rr;\n   nn = /*error:INVALID_ASSIGNMENT*/ro;\n   nn = /*error:INVALID_ASSIGNMENT*/rn;\n   nn = /*error:INVALID_ASSIGNMENT*/oo;\n   nn = nn;\n   nn = nnn;\n\n   nnn = /*error:INVALID_ASSIGNMENT*/r;\n   nnn = /*error:INVALID_ASSIGNMENT*/o;\n   nnn = /*info:DOWN_CAST_COMPOSITE*/n;\n   nnn = /*error:INVALID_ASSIGNMENT*/rr;\n   nnn = /*error:INVALID_ASSIGNMENT*/ro;\n   nnn = /*error:INVALID_ASSIGNMENT*/rn;\n   nnn = /*error:INVALID_ASSIGNMENT*/oo;\n   nnn = /*info:DOWN_CAST_COMPOSITE*/nn;\n   nnn = nnn;\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_objectsWithCallMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int I2I(int x);\ntypedef num N2N(num x);\nclass A {\n   int call(int x) => x;\n}\nclass B {\n   num call(num x) => x;\n}\nint i2i(int x) => x;\nnum n2n(num x) => x;\nvoid main() {\n   {\n     I2I f;\n     f = new A();\n     f = /*error:INVALID_ASSIGNMENT*/new B();\n     f = i2i;\n     f = /*error:INVALID_ASSIGNMENT*/n2n;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_COMPOSITE*/i2i as Object;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_COMPOSITE*/n2n as Function;\n   }\n   {\n     N2N f;\n     f = /*error:INVALID_ASSIGNMENT*/new A();\n     f = new B();\n     f = /*error:INVALID_ASSIGNMENT*/i2i;\n     f = n2n;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_COMPOSITE*/i2i as Object;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_COMPOSITE*/n2n as Function;\n   }\n   {\n     A f;\n     f = new A();\n     f = /*error:INVALID_ASSIGNMENT*/new B();\n     f = /*error:INVALID_ASSIGNMENT*/i2i;\n     f = /*error:INVALID_ASSIGNMENT*/n2n;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_IMPLICIT*/i2i as Object;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_IMPLICIT*/n2n as Function;\n   }\n   {\n     B f;\n     f = /*error:INVALID_ASSIGNMENT*/new A();\n     f = new B();\n     f = /*error:INVALID_ASSIGNMENT*/i2i;\n     f = /*error:INVALID_ASSIGNMENT*/n2n;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_IMPLICIT*/i2i as Object;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_IMPLICIT*/n2n as Function;\n   }\n   {\n     Function f;\n     f = new A();\n     f = new B();\n     f = i2i;\n     f = n2n;\n     f = /*info:UNNECESSARY_CAST,info:DOWN_CAST_IMPLICIT*/i2i as Object;\n     f = /*info:UNNECESSARY_CAST*/n2n as Function;\n   }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_staticMethodVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nclass C {\n  static A top(B x) => x;\n  static B left(B x) => x;\n  static A right(A x) => x;\n  static B bot(A x) => x as B;\n}\n\ntypedef T Function2<S, T>(S z);\n\nvoid main() {\n  {\n    Function2<B, A> f;\n    f = C.top;\n    f = C.left;\n    f = C.right;\n    f = C.bot;\n  }\n  {\n    Function2<B, B> f;\n    f = /*error:INVALID_CAST_METHOD*/C.top;\n    f = C.left;\n    f = /*error:INVALID_ASSIGNMENT*/C.right;\n    f = C.bot;\n  }\n  {\n    Function2<A, A> f;\n    f = /*error:INVALID_CAST_METHOD*/C.top;\n    f = /*error:INVALID_ASSIGNMENT*/C.left;\n    f = C.right;\n    f = C.bot;\n  }\n  {\n    Function2<A, B> f;\n    f = /*error:INVALID_CAST_METHOD*/C.top;\n    f = /*error:INVALID_CAST_METHOD*/C.left;\n    f = /*error:INVALID_CAST_METHOD*/C.right;\n    f = C.bot;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_subtypeOfUniversalType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {\n  nonGenericFn(x) => null;\n  {\n    /*=R*/ f/*<P, R>*/(/*=P*/ p) => null;\n    /*=T*/ g/*<S, T>*/(/*=S*/ s) => null;\n\n    var local = f;\n    local = g; // valid\n\n    // Non-generic function cannot subtype a generic one.\n    local = /*error:INVALID_ASSIGNMENT*/(x) => null;\n    local = /*error:INVALID_ASSIGNMENT*/nonGenericFn;\n  }\n  {\n    Iterable/*<R>*/ f/*<P, R>*/(List/*<P>*/ p) => null;\n    List/*<T>*/ g/*<S, T>*/(Iterable/*<S>*/ s) => null;\n\n    var local = f;\n    local = g; // valid\n\n    var local2 = g;\n    local = local2;\n    local2 = /*error:INVALID_CAST_FUNCTION*/f;\n    local2 = /*info:DOWN_CAST_COMPOSITE*/local;\n\n    // Non-generic function cannot subtype a generic one.\n    local = /*error:INVALID_ASSIGNMENT*/(x) => null;\n    local = /*error:INVALID_ASSIGNMENT*/nonGenericFn;\n  }\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_uninferredClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef num Num2Num(num x);\nvoid main() {\n  Num2Num g = /*info:INFERRED_TYPE_CLOSURE,error:INVALID_ASSIGNMENT*/(int x) { return x; };\n  print(g(42));\n}\n');
        } )());
    }

    test_functionTypingAndSubtyping_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  void bar() => null;\n  void foo() => bar(); // allowed\n}\n');
        } )());
    }

    test_genericClassMethodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nclass Base<T extends B> {\n  T foo() => null;\n}\n\nclass Derived<S extends A> extends Base<B> {\n  /*error:INVALID_METHOD_OVERRIDE*/S foo() => null;\n}\n\nclass Derived2<S extends B> extends Base<B> {\n  S foo() => null;\n}\n');
        } )());
    }

    test_genericFunctionWrongNumberOfArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('/*=T*/ foo/*<T>*/(/*=T*/ x, /*=T*/ y) => x;\n/*=T*/ bar/*<T>*/({/*=T*/ x, /*=T*/ y}) => x;\n\nmain() {\n  String x;\n  // resolving these shouldn\'t crash.\n  foo/*error:EXTRA_POSITIONAL_ARGUMENTS*/(1, 2, 3);\n  x = foo/*error:EXTRA_POSITIONAL_ARGUMENTS*/(\'1\', \'2\', \'3\');\n  foo/*error:NOT_ENOUGH_REQUIRED_ARGUMENTS*/(1);\n  x = foo/*error:NOT_ENOUGH_REQUIRED_ARGUMENTS*/(\'1\');\n  x = foo/*error:EXTRA_POSITIONAL_ARGUMENTS*/(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/1, /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/2, 3);\n  x = foo/*error:NOT_ENOUGH_REQUIRED_ARGUMENTS*/(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/1);\n\n  // named arguments\n  bar(y: 1, x: 2, /*error:UNDEFINED_NAMED_PARAMETER*/z: 3);\n  x = bar(/*error:UNDEFINED_NAMED_PARAMETER*/z: \'1\', x: \'2\', y: \'3\');\n  bar(y: 1);\n  x = bar(x: \'1\', /*error:UNDEFINED_NAMED_PARAMETER*/z: 42);\n  x = bar(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/y: 1, /*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/x: 2, /*error:UNDEFINED_NAMED_PARAMETER*/z: 3);\n  x = bar(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/x: 1);\n}\n');
        } )());
    }

    test_genericMethodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Future<T> {\n  /*=S*/ then/*<S>*/(/*=S*/ onValue(T t)) => null;\n}\n\nclass DerivedFuture<T> extends Future<T> {\n  /*=S*/ then/*<S>*/(/*=S*/ onValue(T t)) => null;\n}\n\nclass DerivedFuture2<A> extends Future<A> {\n  /*=B*/ then/*<B>*/(/*=B*/ onValue(A a)) => null;\n}\n\nclass DerivedFuture3<T> extends Future<T> {\n  /*=S*/ then/*<S>*/(Object onValue(T t)) => null;\n}\n\nclass DerivedFuture4<A> extends Future<A> {\n  /*=B*/ then/*<B>*/(Object onValue(A a)) => null;\n}\n');
        } )());
    }

    test_genericMethodSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A<T> {\n  A<S> create<S extends T>() => new A<S>();\n}\nclass B extends A {\n  A<S> create<S>() => super.create<S>();\n}\nclass C extends A {\n  A<S> create<S>() => super.create();\n}\nclass D extends A<num> {\n  A<S> create<S extends num>() => super.create<S>();\n}\nclass E extends A<num> {\n  A<S> create<S extends num>() => /*error:RETURN_OF_INVALID_TYPE*/super.create<int>();\n}\nclass F extends A<num> {\n  create2<S>() => super.create</*error:TYPE_ARGUMENT_NOT_MATCHING_BOUNDS*/S>();\n}\n    ');
        } )());
    }

    test_genericMethodSuperSubstitute() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Clonable<T> {}\nclass G<T> {\n  create<A extends Clonable<T>, B extends Iterable<A>>() => null;\n}\nclass H extends G<num> {\n  create2() => super.create<Clonable<int>, List<Clonable<int>>>();\n}\n    ');
        } )());
    }

    test_getterGetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nabstract class Base {\n  B get f1;\n  B get f2;\n  B get f3;\n  B get f4;\n}\n\nclass Child extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A get f1 => null;\n  C get f2 => null;\n  get f3 => null;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic get f4 => null;\n}\n');
        } )());
    }

    test_getterOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);\n\nclass F {\n  ToVoid<dynamic> get f => null;\n  ToVoid<int> get g => null;\n}\n\nclass G extends F {\n  ToVoid<int> get f => null;\n  /*error:INVALID_METHOD_OVERRIDE*/ToVoid<dynamic> get g => null;\n}\n\nclass H implements F {\n  ToVoid<int> get f => null;\n  /*error:INVALID_METHOD_OVERRIDE*/ToVoid<dynamic> get g => null;\n}\n');
        } )());
    }

    test_ifForDoWhileStatementsUseBooleanConversion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {\n  dynamic dyn = 42;\n  Object obj = 42;\n  int i = 42;\n  bool b = false;\n\n  if (b) {}\n  if (/*info:DYNAMIC_CAST*/dyn) {}\n  if (/*info:DOWN_CAST_IMPLICIT*/obj) {}\n  if (/*error:NON_BOOL_CONDITION*/i) {}\n\n  while (b) {}\n  while (/*info:DYNAMIC_CAST*/dyn) {}\n  while (/*info:DOWN_CAST_IMPLICIT*/obj) {}\n  while (/*error:NON_BOOL_CONDITION*/i) {}\n\n  do {} while (b);\n  do {} while (/*info:DYNAMIC_CAST*/dyn);\n  do {} while (/*info:DOWN_CAST_IMPLICIT*/obj);\n  do {} while (/*error:NON_BOOL_CONDITION*/i);\n\n  for (;b;) {}\n  for (;/*info:DYNAMIC_CAST*/dyn;) {}\n  for (;/*info:DOWN_CAST_IMPLICIT*/obj;) {}\n  for (;/*error:NON_BOOL_CONDITION*/i;) {}\n}\n');
        } )());
    }

    test_implicitCasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('num n; int i = /*info:ASSIGNMENT_CAST*/n;');
            await this.check();
            this.addFile('num n; int i = /*error:INVALID_ASSIGNMENT*/n;');
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitCasts_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'dart:async\';\n\nFuture<List<String>> foo() async {\n  List<Object> x = <Object>["hello", "world"];\n  return /*info:DOWN_CAST_IMPLICIT*/x;\n}\n    ');
            await this.check();
        } )());
    }

    test_implicitCasts_genericMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var x = <String>[].map<String>((x) => "");\n');
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitCasts_numericOps() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void f() {\n  int x = 0;\n  int y = 0;\n  x += y;\n}\n    ');
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitDynamic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {\n  var /*error:IMPLICIT_DYNAMIC_FIELD*/x0;\n  var /*error:IMPLICIT_DYNAMIC_FIELD*/x1 = (<dynamic>[])[0];\n  var /*error:IMPLICIT_DYNAMIC_FIELD*/x2,\n      x3 = 42,\n      /*error:IMPLICIT_DYNAMIC_FIELD*/x4;\n  dynamic y0;\n  dynamic y1 = (<dynamic>[])[0];\n}\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/*=T*/ a/*<T>*/(/*=T*/ t) => t;\n/*=T*/ b/*<T>*/() => null;\n\nvoid main/*<S>*/() {\n  dynamic d;\n  int i;\n  /*error:IMPLICIT_DYNAMIC_FUNCTION*/a(d);\n  a(42);\n  /*error:IMPLICIT_DYNAMIC_FUNCTION*/b();\n  d = /*error:IMPLICIT_DYNAMIC_FUNCTION*/b();\n  i = b();\n\n  void f/*<T>*/(/*=T*/ t) {};\n  /*=T*/ g/*<T>*/() => null;\n\n  /*error:IMPLICIT_DYNAMIC_FUNCTION*/f(d);\n  f(42);\n  /*error:IMPLICIT_DYNAMIC_FUNCTION*/g();\n  d = /*error:IMPLICIT_DYNAMIC_FUNCTION*/g();\n  i = g();\n\n  /*error:IMPLICIT_DYNAMIC_INVOKE*/(/*<T>*/(/*=T*/ t) => t)(d);\n  (/*<T>*/(/*=T*/ t) => t)(42);\n  (/*<T>*/() => /*info:UNNECESSARY_CAST*/null as dynamic/*=T*/)/*<int>*/();\n}\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_listLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('\nvar l0 = /*error:IMPLICIT_DYNAMIC_LIST_LITERAL*/[];\nList l1 = /*error:IMPLICIT_DYNAMIC_LIST_LITERAL*/[];\nList<dynamic> l2 = /*error:IMPLICIT_DYNAMIC_LIST_LITERAL*/[];\ndynamic d = 42;\nvar l3 = /*error:IMPLICIT_DYNAMIC_LIST_LITERAL*/[d, d];\n\nvar l4 = <dynamic>[];\nvar l5 = <int>[];\nList<int> l6 = /*info:INFERRED_TYPE_LITERAL*/[];\nvar l7 = /*info:INFERRED_TYPE_LITERAL*/[42];\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_mapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var m0 = /*error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{};\nMap m1 = /*error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{};\nMap<dynamic, dynamic> m2 = /*error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{};\ndynamic d = 42;\nvar m3 = /*error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{d: d};\nvar m4 = /*info:INFERRED_TYPE_LITERAL,error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{\'x\': d, \'y\': d};\nvar m5 = /*info:INFERRED_TYPE_LITERAL,error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{d: \'x\'};\n\nvar m6 = <dynamic, dynamic>{};\nvar m7 = <String, String>{};\nMap<String, String> m8 = /*info:INFERRED_TYPE_LITERAL*/{};\nvar m9 = /*info:INFERRED_TYPE_LITERAL*/{\'hi\': \'there\'};\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {\n  /*=T*/ m/*<T>*/(/*=T*/ s) => s;\n  /*=T*/ n/*<T>*/() => null;\n}\nclass D<E> {\n  /*=T*/ m/*<T>*/(/*=T*/ s) => s;\n  /*=T*/ n/*<T>*/() => null;\n}\nvoid f() {\n  dynamic d;\n  int i;\n  new C()./*error:IMPLICIT_DYNAMIC_METHOD*/m(d);\n  new C().m(42);\n  new C()./*error:IMPLICIT_DYNAMIC_METHOD*/n();\n  d = new C()./*error:IMPLICIT_DYNAMIC_METHOD*/n();\n  i = new C().n();\n\n  new D<int>()./*error:IMPLICIT_DYNAMIC_METHOD*/m(d);\n  new D<int>().m(42);\n  new D<int>()./*error:IMPLICIT_DYNAMIC_METHOD*/n();\n  d = new D<int>()./*error:IMPLICIT_DYNAMIC_METHOD*/n();\n  i = new D<int>().n();\n}\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const dynamic DYNAMIC_VALUE = 42;\n\n// simple formal\nvoid f0(/*error:IMPLICIT_DYNAMIC_PARAMETER*/x) {}\nvoid f1(dynamic x) {}\n\n// default formal\nvoid df0([/*error:IMPLICIT_DYNAMIC_PARAMETER*/x = DYNAMIC_VALUE]) {}\nvoid df1([dynamic x = DYNAMIC_VALUE]) {}\n\n// https://github.com/dart-lang/sdk/issues/25794\nvoid df2([/*error:IMPLICIT_DYNAMIC_PARAMETER*/x = 42]) {}\n\n// default formal (named)\nvoid nf0({/*error:IMPLICIT_DYNAMIC_PARAMETER*/x: DYNAMIC_VALUE}) {}\nvoid nf1({dynamic x: DYNAMIC_VALUE}) {}\n\n// https://github.com/dart-lang/sdk/issues/25794\nvoid nf2({/*error:IMPLICIT_DYNAMIC_PARAMETER*/x: 42}) {}\n\n// field formal\nclass C {\n  var /*error:IMPLICIT_DYNAMIC_FIELD*/x;\n  C(this.x);\n}\n\n// function typed formal\nvoid ftf0(void x(/*error:IMPLICIT_DYNAMIC_PARAMETER*/y)) {}\nvoid ftf1(void x(int y)) {}\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('// function\n/*error:IMPLICIT_DYNAMIC_RETURN*/f0() {return f0();}\ndynamic f1() { return 42; }\n\n// nested function\nvoid main() {\n  /*error:IMPLICIT_DYNAMIC_RETURN*/g0() {return g0();}\n  dynamic g1() { return 42; }\n}\n\n// methods\nclass B {\n  int m1() => 42;\n}\nclass C extends B {\n  /*error:IMPLICIT_DYNAMIC_RETURN*/m0() => 123;\n  m1() => 123;\n  dynamic m2() => \'hi\';\n}\n\n// accessors\nset x(int value) {}\nget /*error:IMPLICIT_DYNAMIC_RETURN*/y0 => 42;\ndynamic get y1 => 42;\n\n// function typed formals\nvoid ftf0(/*error:IMPLICIT_DYNAMIC_RETURN*/f(int x)) {}\nvoid ftf1(dynamic f(int x)) {}\n\n// function expressions\nvar fe0 = (int x) => x as dynamic;\nvar fe1 = (int x) => x;\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {\n  static void test(int body()) {}\n}\n\nvoid main() {\n  C.test(/*info:INFERRED_TYPE_CLOSURE*/()  {\n    return 42;\n  });\n}\n');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C<T> {}\nclass M1<T extends /*error:IMPLICIT_DYNAMIC_TYPE*/List> {}\nclass M2<T> {}\nclass I<T> {}\nclass D<T, S> extends /*error:IMPLICIT_DYNAMIC_TYPE*/C\n    with M1, /*error:IMPLICIT_DYNAMIC_TYPE*/M2\n    implements /*error:IMPLICIT_DYNAMIC_TYPE*/I {}\nclass D2<T, S> = /*error:IMPLICIT_DYNAMIC_TYPE*/C\n    with M1, /*error:IMPLICIT_DYNAMIC_TYPE*/M2\n    implements /*error:IMPLICIT_DYNAMIC_TYPE*/I;\n\nC f(D d) {\n  D x = /*info:INFERRED_TYPE_ALLOCATION*/new /*error:IMPLICIT_DYNAMIC_TYPE*/D();\n  D<int, dynamic> y = /*info:INFERRED_TYPE_ALLOCATION*/new /*error:IMPLICIT_DYNAMIC_TYPE*/D();\n  D<dynamic, int> z = /*info:INFERRED_TYPE_ALLOCATION*/new /*error:IMPLICIT_DYNAMIC_TYPE*/D();\n  return /*info:INFERRED_TYPE_ALLOCATION*/new /*error:IMPLICIT_DYNAMIC_TYPE*/C();\n}\n\nclass A<T extends num> {}\nclass N1<T extends List<int>> {}\nclass N2<T extends Object> {}\nclass J<T extends Object> {}\nclass B<T extends Object> extends A with N1, N2 implements J {}\nA g(B b) {\n  B y = /*info:INFERRED_TYPE_ALLOCATION*/new B();\n  return /*info:INFERRED_TYPE_ALLOCATION*/new A();\n}\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var /*error:IMPLICIT_DYNAMIC_VARIABLE*/x0;\nvar /*error:IMPLICIT_DYNAMIC_VARIABLE*/x1 = (<dynamic>[])[0];\nvar /*error:IMPLICIT_DYNAMIC_VARIABLE*/x2,\n    x3 = 42,\n    /*error:IMPLICIT_DYNAMIC_VARIABLE*/x4;\ndynamic y0;\ndynamic y1 = (<dynamic>[])[0];\n    ');
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_invalidOverrides_baseClassOverrideToChildInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I {\n    m(A a);\n}\n\nclass Base {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base implements I {}\n');
        } )());
    }

    test_invalidOverrides_childOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n    A f;\n}\n\nclass T1 extends Base {\n  /*warning:MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE,error:INVALID_METHOD_OVERRIDE*/B get f => null;\n}\n\nclass T2 extends Base {\n  /*warning:MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE,error:INVALID_METHOD_OVERRIDE*/set f(\n      B b) => null;\n}\n\nclass T3 extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/final B\n      /*warning:FINAL_NOT_INITIALIZED*/f;\n}\nclass T4 extends Base {\n  // two: one for the getter one for the setter.\n  /*error:INVALID_METHOD_OVERRIDE, error:INVALID_METHOD_OVERRIDE*/B f;\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE*/T5 implements Base {\n  /*warning:MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE, error:INVALID_METHOD_OVERRIDE*/B get f => null;\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE*/T6 implements Base {\n  /*warning:MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE, error:INVALID_METHOD_OVERRIDE*/set f(B b) => null;\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE*/T7 implements Base {\n  /*error:INVALID_METHOD_OVERRIDE*/final B f = null;\n}\nclass T8 implements Base {\n  // two: one for the getter one for the setter.\n  /*error:INVALID_METHOD_OVERRIDE, error:INVALID_METHOD_OVERRIDE*/B f;\n}\n');
        } )());
    }

    test_invalidOverrides_childOverride2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n    m(A a) {}\n}\n\nclass Test extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_invalidOverrides_classOverrideOfInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I {\n    m(A a);\n}\n\nclass T1 implements I {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_invalidOverrides_doubleOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Grandparent {\n    m(A a) {}\n}\nclass Parent extends Grandparent {\n    m(A a) {}\n}\n\nclass Test extends Parent {\n    // Reported only once\n    /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_invalidOverrides_doubleOverride2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Grandparent {\n    m(A a) {}\n}\nclass Parent extends Grandparent {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n\nclass Test extends Parent {\n    m(B a) {}\n}\n');
        } )());
    }

    test_invalidOverrides_grandChildOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Grandparent {\n    m(A a) {}\n    int x;\n}\nclass Parent extends Grandparent {\n}\n\nclass Test extends Parent {\n    /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n    int x;\n}\n');
        } )());
    }

    test_invalidOverrides_mixinOverrideOfInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I {\n    m(A a);\n}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Object\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M implements I;\n');
        } )());
    }

    test_invalidOverrides_mixinOverrideToBase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n    m(A a) {}\n    int x;\n}\n\nclass M1 {\n    m(B a) {}\n}\n\nclass M2 {\n    int x;\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1 {}\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T2 extends Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1, M2 {}\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T3 extends Base\n    with M2, /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1 {}\n\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1;\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U2 = Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1, M2;\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U3 = Base\n    with M2, /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1;\n');
        } )());
    }

    test_invalidOverrides_mixinOverrideToMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n}\n\nclass M1 {\n    m(B a) {}\n    int x;\n}\n\nclass M2 {\n    m(A a) {}\n    int x;\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Base\n    with M1,\n    /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M2 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Base\n    with M1,\n    /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M2;\n');
        } )());
    }

    test_invalidOverrides_noDuplicateMixinOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n    m(A a) {}\n}\n\nclass M1 {\n    m(A a) {}\n}\n\nclass M2 {\n    m(B a) {}\n}\n\nclass M3 {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Base\n    with M1, /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M2, M3 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Base\n    with M1, /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M2, M3;\n');
        } )());
    }

    test_invalidOverrides_noErrorsIfSubclassCorrectlyOverrideBaseAndInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nclass Base {\n    m(A a) {}\n}\n\nclass I1 {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base\n    implements I1 {}\n\nclass T2 extends Base implements I1 {\n    m(a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T3\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/Base\n    implements I1 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U3\n    = Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/Base\n    implements I1;\n\nclass T4 extends Object with Base implements I1 {\n    m(a) {}\n}\n');
        } )());
    }

    test_invalidRuntimeChecks() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int I2I(int x);\ntypedef int D2I(x);\ntypedef int II2I(int x, int y);\ntypedef int DI2I(x, int y);\ntypedef int ID2I(int x, y);\ntypedef int DD2I(x, y);\n\ntypedef I2D(int x);\ntypedef D2D(x);\ntypedef II2D(int x, int y);\ntypedef DI2D(x, int y);\ntypedef ID2D(int x, y);\ntypedef DD2D(x, y);\n\nint foo(int x) => x;\nint bar(int x, int y) => x + y;\n\nvoid main() {\n  bool b;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/foo is I2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/foo is D2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/foo is I2D;\n  b = foo is D2D;\n\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is II2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is DI2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is ID2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is II2D;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is DD2I;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is DI2D;\n  b = /*info:NON_GROUND_TYPE_CHECK_INFO*/bar is ID2D;\n  b = bar is DD2D;\n\n  // For as, the validity of checks is deferred to runtime.\n  Function f;\n  f = /*info:UNNECESSARY_CAST*/foo as I2I;\n  f = /*info:UNNECESSARY_CAST*/foo as D2I;\n  f = /*info:UNNECESSARY_CAST*/foo as I2D;\n  f = /*info:UNNECESSARY_CAST*/foo as D2D;\n\n  f = /*info:UNNECESSARY_CAST*/bar as II2I;\n  f = /*info:UNNECESSARY_CAST*/bar as DI2I;\n  f = /*info:UNNECESSARY_CAST*/bar as ID2I;\n  f = /*info:UNNECESSARY_CAST*/bar as II2D;\n  f = /*info:UNNECESSARY_CAST*/bar as DD2I;\n  f = /*info:UNNECESSARY_CAST*/bar as DI2D;\n  f = /*info:UNNECESSARY_CAST*/bar as ID2D;\n  f = /*info:UNNECESSARY_CAST*/bar as DD2D;\n}\n');
        } )());
    }

    test_leastUpperBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef T Returns<T>();\n\n// regression test for https://github.com/dart-lang/sdk/issues/26094\nclass A <S extends Returns<S>, T extends Returns<T>> {\n  int test(bool b) {\n    S s;\n    T t;\n    if (b) {\n      return /*error:RETURN_OF_INVALID_TYPE*/b ? s : t;\n    } else {\n      return /*error:RETURN_OF_INVALID_TYPE*/s ?? t;\n    }\n  }\n}\n\nclass B<S, T extends S> {\n  T t;\n  S s;\n  int test(bool b) {\n    return /*error:RETURN_OF_INVALID_TYPE*/b ? t : s;\n  }\n}\n\nclass C {\n  // Check that the least upper bound of two types with the same\n  // class but different type arguments produces the pointwise\n  // least upper bound of the type arguments\n  int test1(bool b) {\n    List<int> li;\n    List<double> ld;\n    return /*error:RETURN_OF_INVALID_TYPE*/b ? li : ld;\n  }\n  // TODO(leafp): This case isn\'t handled yet.  This test checks\n  // the case where two related classes are instantiated with related\n  // but different types.\n  Iterable<num> test2(bool b) {\n    List<int> li;\n    Iterable<double> id;\n    int x =\n        /*info:ASSIGNMENT_CAST should be error:INVALID_ASSIGNMENT*/\n        b ? li : id;\n    return /*info:DOWN_CAST_COMPOSITE should be pass*/b ? li : id;\n  }\n}\n');
        } )());
    }

    test_leastUpperBounds_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef String TakesA<T>(T item);\n\nvoid main() {\n  TakesA<int> f;\n  TakesA<dynamic> g;\n  TakesA<String> h;\n  g = h;\n  f = /*info:DOWN_CAST_COMPOSITE*/f ?? g;\n}\n');
        } )());
    }

    test_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('library lib1;',{
                name : '/lib1.dart'});
            await this.checkFile('import \'lib1.dart\' deferred as lib1;\nimport \'dart:async\' show Future;\nmain() {\n  Future f = lib1.loadLibrary();\n}');
        } )());
    }

    test_methodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nclass Base {\n  B m1(B a) => null;\n  B m2(B a) => null;\n  B m3(B a) => null;\n  B m4(B a) => null;\n  B m5(B a) => null;\n  B m6(B a) => null;\n}\n\nclass Child extends Base {\n  /*error:INVALID_METHOD_OVERRIDE*/A m1(A value) => null;\n  /*error:INVALID_METHOD_OVERRIDE*/C m2(C value) => null;\n  /*error:INVALID_METHOD_OVERRIDE*/A m3(C value) => null;\n  C m4(A value) => null;\n  m5(value) => null;\n  /*error:INVALID_METHOD_OVERRIDE*/dynamic m6(dynamic value) => null;\n}\n');
        } )());
    }

    test_methodOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class A {\n  bool operator ==(Object object);\n}\n\nclass B implements A {}\n\nclass F {\n  void f(x) {}\n  void g(int x) {}\n}\n\nclass G extends F {\n  /*error:INVALID_METHOD_OVERRIDE*/void f(int x) {}\n  void g(dynamic x) {}\n}\n\nclass H implements F {\n  /*error:INVALID_METHOD_OVERRIDE*/void f(int x) {}\n  void g(dynamic x) {}\n}\n');
        } )());
    }

    test_methodTearoffStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  void foo(dynamic x) {}\n  void test(void f(int x)) {\n    test(foo);\n  }\n}\n    ');
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class Base implements I1 {}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M;\n');
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass /*error:NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE*/Base\n    implements I1 {}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Base with M {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 = Base with M;\n');
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 implements I1 {}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1\n    = Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2;\n');
        } )());
    }

    test_mixinOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class M1 {\n    m(A a);\n}\nabstract class I2 extends Object with M1 {}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1\n    = Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2;\n');
        } )());
    }

    test_mixinOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 extends I1 {}\n\nclass M {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1\n    = Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I2;\n');
        } )());
    }

    test_noDuplicateReports_baseTypeAndMixinOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass Base {\n    m(B a) {}\n}\n\nclass M {\n    m(B a) {}\n}\n\n// Here we want to report both, because the error location is\n// different.\n// TODO(sigmund): should we merge these as well?\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I1 {}\n\n\n// Here we want to report both, because the error location is\n// different.\n// TODO(sigmund): should we merge these as well?\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U1 =\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/Base\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I1;\n');
        } )());
    }

    test_noDuplicateReports_twoGrandTypesOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass Grandparent {\n    m(B a) {}\n}\n\nclass Parent1 extends Grandparent {\n    m(B a) {}\n}\nclass Parent2 extends Grandparent {}\n\n// Note: otherwise both errors would be reported on this line\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Parent1\n    implements I1 {}\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T2\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Parent2\n    implements I1 {}\n');
        } )());
    }

    test_noDuplicateReports_twoMixinsOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass M1 {\n    m(B a) {}\n}\n\nclass M2 {\n    m(B a) {}\n}\n\n// Here we want to report both, because the error location is\n// different.\n// TODO(sigmund): should we merge these as well?\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1 extends Object\n    with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M1,\n    /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M2\n    implements I1 {}\n');
        } )());
    }

    test_noDuplicateReports_typeAndBaseTypeOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass Base {\n    m(B a) {}\n}\n\n// Note: no error reported in `extends Base` to avoid duplicating\n// the error in T1.\nclass T1 extends Base implements I1 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n\n// If there is no error in the class, we do report the error at\n// the base class:\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T2\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base\n    implements I1 {}\n');
        } )());
    }

    test_noDuplicateReports_typeAndMixinOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass M {\n    m(B a) {}\n}\n\nclass T1 extends Object with M implements I1 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T2\n    extends Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I1 {}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/U2\n    = Object with /*error:INVALID_METHOD_OVERRIDE_FROM_MIXIN*/M\n    implements I1;\n');
        } )());
    }

    test_noDuplicateReports_typeOverridesSomeMethodInMultipleInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 implements I1 {\n    m(A a);\n}\n\nclass Base {}\n\nclass T1 implements I2 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_nullCoalescingOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass C<T> {}\nmain() {\n  A a, b;\n  a ??= new A();\n  b = b ?? new A();\n\n  // downwards inference\n  C<int> c, d;\n  c ??= /*info:INFERRED_TYPE_ALLOCATION*/new C();\n  d = d ?? /*info:INFERRED_TYPE_ALLOCATION*/new C();\n}\n');
        } )());
    }

    test_nullCoalescingStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('bool _alwaysTrue(x) => true;\ntypedef bool TakesA<T>(T t);\nclass C<T> {\n  TakesA<T> g;\n  C(TakesA<T> f)\n    : g = f ?? _alwaysTrue;\n  C.a() : g = _alwaysTrue;\n}\n    ');
        } )());
    }

    test_optionalParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void takesF(void f(int x)) {\n  takesF(/*info:INFERRED_TYPE_CLOSURE,\n           info:INFERRED_TYPE_CLOSURE*/([x]) { bool z = x.isEven; });\n  takesF(/*info:INFERRED_TYPE_CLOSURE,\n           info:INFERRED_TYPE_CLOSURE*/(y) { bool z = y.isEven; });\n}\n    ');
        } )());
    }

    test_overrideNarrowsType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class A {}\nclass B extends A {}\n\nabstract class C {\n  m(A a);\n  n(B b);\n}\nabstract class D extends C {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B b);\n  n(A a);\n}\n    ');
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_overrideNarrowsType_legalWithChecked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nabstract class A { void test(A arg) { } }\nabstract class B extends A { void test(@checked B arg) { } }\nabstract class X implements A { }\nclass C extends B with X { }\nclass D extends B implements A { }\n    ');
        } )());
    }

    test_overrideNarrowsType_noDuplicateError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';\nabstract class A { void test(A arg) { } }\nabstract class B extends A {\n  /*error:INVALID_METHOD_OVERRIDE*/void test(B arg) { }\n}\nabstract class X implements A { }\nclass C extends B with X { }\n\n// We treat "implements A" as asking for another check.\n// This feels inconsistent to me.\nclass D /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends B implements A { }\n    ');
        } )());
    }

    test_privateOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\' as main;\n\nclass Base {\n  var f1;\n  var _f2;\n  var _f3;\n  get _f4 => null;\n\n  int _m1() => null;\n}\n\nclass GrandChild extends main.Child {\n  var _f2;\n  var _f3;\n  var _f4;\n\n  /*error:INVALID_METHOD_OVERRIDE*/String _m1() => null;\n}\n',{
                name : '/helper.dart'});
            await this.checkFile('import \'helper.dart\' as helper;\n\nclass Child extends helper.Base {\n  var f1;\n  var _f2;\n  var _f4;\n\n  String _m1() => null;\n}\n');
        } )());
    }

    test_proxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('@proxy class C {}\n@proxy class D {\n  var f;\n  m() => null;\n  operator -() => null;\n  operator +(int other) => null;\n  operator [](int index) => null;\n  call() => null;\n}\n@proxy class F implements Function { noSuchMethod(i) => 42; }\n\n\nm() {\n  D d = new D();\n  d.m();\n  d.m;\n  d.f;\n  -d;\n  d + 7;\n  d[7];\n  d();\n\n  C c = new C();\n  /*info:DYNAMIC_INVOKE*/c.m();\n  /*info:DYNAMIC_INVOKE*/c.m;\n  /*info:DYNAMIC_INVOKE*/-c;\n  /*info:DYNAMIC_INVOKE*/c + 7;\n  /*info:DYNAMIC_INVOKE*/c[7];\n  /*error:INVOCATION_OF_NON_FUNCTION,info:DYNAMIC_INVOKE*/c();\n\n  F f = new F();\n  /*info:DYNAMIC_INVOKE*/f();\n}\n    ');
        } )());
    }

    test_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  A(A x) {}\n  A.two() : this(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n}\n');
        } )());
    }

    test_relaxedCasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\n\nclass L<T> {}\nclass M<T> extends L<T> {}\n//     L<dynamic|Object>\n//    /              \n// M<dynamic|Object>  L<A>\n//                  /\n//          M<A>\n// In normal Dart, there are additional edges\n//  from M<A> to M<dynamic>\n//  from L<A> to M<dynamic>\n//  from L<A> to L<dynamic>\nvoid main() {\n  L lOfDs;\n  L<Object> lOfOs;\n  L<A> lOfAs;\n\n  M mOfDs;\n  M<Object> mOfOs;\n  M<A> mOfAs;\n\n  {\n    lOfDs = mOfDs;\n    lOfDs = mOfOs;\n    lOfDs = mOfAs;\n    lOfDs = lOfDs;\n    lOfDs = lOfOs;\n    lOfDs = lOfAs;\n    lOfDs = /*info:INFERRED_TYPE_ALLOCATION*/new L(); // Reset type propagation.\n  }\n  {\n    lOfOs = mOfDs;\n    lOfOs = mOfOs;\n    lOfOs = mOfAs;\n    lOfOs = lOfDs;\n    lOfOs = lOfOs;\n    lOfOs = lOfAs;\n    lOfOs = new L<Object>(); // Reset type propagation.\n  }\n  {\n    lOfAs = /*error:INVALID_ASSIGNMENT*/mOfDs;\n    lOfAs = /*error:INVALID_ASSIGNMENT*/mOfOs;\n    lOfAs = mOfAs;\n    lOfAs = /*info:DOWN_CAST_COMPOSITE*/lOfDs;\n    lOfAs = /*info:DOWN_CAST_IMPLICIT*/lOfOs;\n    lOfAs = lOfAs;\n    lOfAs = new L<A>(); // Reset type propagation.\n  }\n  {\n    mOfDs = mOfDs;\n    mOfDs = mOfOs;\n    mOfDs = mOfAs;\n    mOfDs = /*info:DOWN_CAST_IMPLICIT*/lOfDs;\n    mOfDs = /*info:DOWN_CAST_IMPLICIT*/lOfOs;\n    mOfDs = /*error:INVALID_ASSIGNMENT*/lOfAs;\n    mOfDs = /*info:INFERRED_TYPE_ALLOCATION*/new M(); // Reset type propagation.\n  }\n  {\n    mOfOs = mOfDs;\n    mOfOs = mOfOs;\n    mOfOs = mOfAs;\n    mOfOs = /*info:DOWN_CAST_IMPLICIT*/lOfDs;\n    mOfOs = /*info:DOWN_CAST_IMPLICIT*/lOfOs;\n    mOfOs = /*error:INVALID_ASSIGNMENT*/lOfAs;\n    mOfOs = new M<Object>(); // Reset type propagation.\n  }\n  {\n    mOfAs = /*info:DOWN_CAST_COMPOSITE*/mOfDs;\n    mOfAs = /*info:DOWN_CAST_IMPLICIT*/mOfOs;\n    mOfAs = mOfAs;\n    mOfAs = /*info:DOWN_CAST_COMPOSITE*/lOfDs;\n    mOfAs = /*info:DOWN_CAST_IMPLICIT*/lOfOs;\n    mOfAs = /*info:DOWN_CAST_IMPLICIT*/lOfAs;\n  }\n}\n');
        } )());
    }

    test_setterOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);\nclass F {\n  void set f(ToVoid<dynamic> x) {}\n  void set g(ToVoid<int> x) {}\n  void set h(dynamic x) {}\n  void set i(int x) {}\n}\n\nclass G extends F {\n  /*error:INVALID_METHOD_OVERRIDE*/void set f(ToVoid<int> x) {}\n  void set g(ToVoid<dynamic> x) {}\n  /*error:INVALID_METHOD_OVERRIDE*/void set h(int x) {}\n  void set i(dynamic x) {}\n}\n\nclass H implements F {\n  /*error:INVALID_METHOD_OVERRIDE*/void set f(ToVoid<int> x) {}\n  void set g(ToVoid<dynamic> x) {}\n  /*error:INVALID_METHOD_OVERRIDE*/void set h(int x) {}\n  void set i(dynamic x) {}\n}\n ');
        } )());
    }

    test_setterReturnTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void voidFn() => null;\nclass A {\n  set a(y) => 4;\n  set b(y) => voidFn();\n  void set c(y) => 4;\n  void set d(y) => voidFn();\n  /*warning:NON_VOID_RETURN_FOR_SETTER*/int set e(y) => 4;\n  /*warning:NON_VOID_RETURN_FOR_SETTER*/int set f(y) =>\n      /*error:RETURN_OF_INVALID_TYPE*/voidFn();\n  set g(y) {return /*error:RETURN_OF_INVALID_TYPE*/4;}\n  void set h(y) {return /*error:RETURN_OF_INVALID_TYPE*/4;}\n  /*warning:NON_VOID_RETURN_FOR_SETTER*/int set i(y) {return 4;}\n}\n');
        } )());
    }

    test_setterSetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends B {}\n\nabstract class Base {\n  void set f1(B value);\n  void set f2(B value);\n  void set f3(B value);\n  void set f4(B value);\n  void set f5(B value);\n}\n\nclass Child extends Base {\n  void set f1(A value) {}\n  /*error:INVALID_METHOD_OVERRIDE*/void set f2(C value) {}\n  void set f3(value) {}\n  void set f4(dynamic value) {}\n  set f5(B value) {}\n}\n');
        } )());
    }

    test_superCallPlacement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Base {\n  var x;\n  Base() : x = print(\'Base.1\') { print(\'Base.2\'); }\n}\n\nclass Derived extends Base {\n  var y, z;\n  Derived()\n      : y = print(\'Derived.1\'),\n        /*error:INVALID_SUPER_INVOCATION*/super(),\n        z = print(\'Derived.2\') {\n    print(\'Derived.3\');\n  }\n}\n\nclass Valid extends Base {\n  var y, z;\n  Valid()\n      : y = print(\'Valid.1\'),\n        z = print(\'Valid.2\'),\n        super() {\n    print(\'Valid.3\');\n  }\n}\n\nclass AlsoValid extends Base {\n  AlsoValid() : super();\n}\n\nmain() => new Derived();\n');
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nabstract class Base implements I1 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n\nclass T1 extends Base {\n    // we consider the base class incomplete because it is\n    // abstract, so we report the error here too.\n    // TODO(sigmund): consider tracking overrides in a fine-grain\n    // manner, then this and the double-overrides would not be\n    // reported.\n    /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n');
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\n\nclass Base implements I1 {\n  /*error:INVALID_METHOD_OVERRIDE*/m(B a) {}\n}\n\nclass T1 extends Base {\n    m(B a) {}\n}\n');
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 implements I1 {}\n\nclass Base {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base implements I2 {}\n');
        } )());
    }

    test_superclassOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class M1 {\n    m(A a);\n}\nabstract class I2 extends Object with M1 {}\n\nclass Base {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base\n    implements I2 {}\n');
        } )());
    }

    test_superclassOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B {}\n\nabstract class I1 {\n    m(A a);\n}\nabstract class I2 extends I1 {}\n\nclass Base {\n    m(B a) {}\n}\n\nclass /*error:INCONSISTENT_METHOD_INHERITANCE*/T1\n    /*error:INVALID_METHOD_OVERRIDE_FROM_BASE*/extends Base\n    implements I2 {}\n');
        } )());
    }

    test_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A { A(A x) {} }\nclass B extends A {\n  B() : super(/*error:ARGUMENT_TYPE_NOT_ASSIGNABLE*/3);\n}\n');
        } )());
    }

    test_tearOffTreatedConsistentlyAsStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void foo(void f(String x)) {}\n\nclass A {\n  Null bar1(dynamic x) => null;\n  void bar2(dynamic x) => null;\n  Null bar3(String x) => null;\n  void test() {\n    foo(bar1);\n    foo(bar2);\n    foo(bar3);\n  }\n}\n\n\nNull baz1(dynamic x) => null;\nvoid baz2(dynamic x) => null;\nNull baz3(String x) => null;\nvoid test() {\n  foo(baz1);\n  foo(baz2);\n  foo(baz3);\n}\n    ');
        } )());
    }

    test_tearOffTreatedConsistentlyAsStrictArrowNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void Handler(String x);\nvoid foo({Handler f}) {}\n\nclass A {\n  Null bar1(dynamic x) => null;\n  void bar2(dynamic x) => null;\n  Null bar3(String x) => null;\n  void test() {\n    foo(f: bar1);\n    foo(f: bar2);\n    foo(f: bar3);\n  }\n}\n\n\nNull baz1(dynamic x) => null;\nvoid baz2(dynamic x) => null;\nNull baz3(String x) => null;\nvoid test() {\n  foo(f: baz1);\n  foo(f: baz2);\n  foo(f: baz3);\n}\n    ');
        } )());
    }

    test_ternaryOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Comparable<T> {\n  int compareTo(T other);\n  static int compare(Comparable a, Comparable b) => a.compareTo(b);\n}\ntypedef int Comparator<T>(T a, T b);\n\ntypedef bool _Predicate<T>(T value);\n\nclass SplayTreeMap<K, V> {\n  Comparator<K> _comparator;\n  _Predicate _validKey;\n\n  // The warning on assigning to _comparator is legitimate. Since K has\n  // no bound, all we know is that it\'s object. _comparator\'s function\n  // type is effectively:              (Object, Object) -> int\n  // We are assigning it a fn of type: (Comparable, Comparable) -> int\n  // There\'s no telling if that will work. For example, consider:\n  //\n  //     new SplayTreeMap<Uri>();\n  //\n  // This would end up calling .compareTo() on a Uri, which doesn\'t\n  // define that since it doesn\'t implement Comparable.\n  SplayTreeMap([int compare(K key1, K key2),\n                bool isValidKey(potentialKey)])\n    : _comparator = /*info:DOWN_CAST_COMPOSITE*/(compare == null) ? Comparable.compare : compare,\n      _validKey = (isValidKey != null) ? isValidKey : ((v) => true) {\n\n    // NOTE: this is a down cast because isValidKey has fuzzy arrow type.\n    _Predicate<Object> v = /*info:DOWN_CAST_COMPOSITE*/(isValidKey != null)\n        ? isValidKey : (/*info:INFERRED_TYPE_CLOSURE*/(_) => true);\n\n    v = (isValidKey != null)\n         ? v : (/*info:INFERRED_TYPE_CLOSURE*/(_) => true);\n  }\n}\nvoid main() {\n  Object obj = 42;\n  dynamic dyn = 42;\n  int i = 42;\n\n  // Check the boolean conversion of the condition.\n  print(/*error:NON_BOOL_CONDITION*/i ? false : true);\n  print((/*info:DOWN_CAST_IMPLICIT*/obj) ? false : true);\n  print((/*info:DYNAMIC_CAST*/dyn) ? false : true);\n}\n');
        } )());
    }

    test_typeCheckingLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('test() {\n  num n = 3;\n  int i = 3;\n  String s = "hello";\n  {\n     List<int> l = <int>[i];\n     l = <int>[/*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/s];\n     l = <int>[/*info:DOWN_CAST_IMPLICIT*/n];\n     l = <int>[i, /*info:DOWN_CAST_IMPLICIT*/n, /*error:LIST_ELEMENT_TYPE_NOT_ASSIGNABLE*/s];\n  }\n  {\n     List l = [i];\n     l = [s];\n     l = [n];\n     l = [i, n, s];\n  }\n  {\n     Map<String, int> m = <String, int>{s: i};\n     m = <String, int>{s: /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/s};\n     m = <String, int>{s: /*info:DOWN_CAST_IMPLICIT*/n};\n     m = <String, int>{s: i,\n                       s: /*info:DOWN_CAST_IMPLICIT*/n,\n                       s: /*error:MAP_VALUE_TYPE_NOT_ASSIGNABLE*/s};\n  }\n // TODO(leafp): We can\'t currently test for key errors since the\n // error marker binds to the entire entry.\n  {\n     Map m = {s: i};\n     m = {s: s};\n     m = {s: n};\n     m = {s: i,\n          s: n,\n          s: s};\n     m = {i: s,\n          n: s,\n          s: s};\n  }\n}\n');
        } )());
    }

    test_typePromotionFromDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('f() {\n  dynamic x;\n  if (x is int) {\n    int y = x;\n    String z = /*error:INVALID_ASSIGNMENT*/x;\n  }\n}\ng() {\n  Object x;\n  if (x is int) {\n    int y = x;\n    String z = /*error:INVALID_ASSIGNMENT*/x;\n  }\n}\n');
        } )());
    }

    test_typePromotionFromTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f/*<T>*/(/*=T*/ object) {\n  if (object is String) print(object.substring(1));\n}\nvoid g/*<T extends num>*/(/*=T*/ object) {\n  if (object is int) print(object.isEven);\n  if (object is String) print(/*info:DYNAMIC_INVOKE*/object.substring(1));\n}\nclass Clonable<T> {}\nclass SubClonable<T> extends Clonable<T> {\n  T m(T t) => t;\n}\nvoid takesSubClonable/*<A>*/(SubClonable/*<A>*/ t) {}\n\nvoid h/*<T extends Clonable<T>>*/(/*=T*/ object) {\n  if (/*info:NON_GROUND_TYPE_CHECK_INFO*/object is SubClonable/*<T>*/) {\n    print(object.m(object));\n\n    SubClonable/*<T>*/ s = object;\n    takesSubClonable/*<T>*/(object);\n    h(object);\n  }\n}\n');
        } )());
    }

    test_typePromotionFromTypeParameterAndInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f/*<T extends num>*/(T x, T y) {\n  var z = x;\n  var f = () => x;\n  f = () => y;\n  if (x is int) {\n    /*info:DYNAMIC_INVOKE*/z./*error:UNDEFINED_GETTER*/isEven;\n    var q = x;\n    q = /*info:DOWN_CAST_COMPOSITE*/z;\n    /*info:DYNAMIC_INVOKE*/f()./*error:UNDEFINED_GETTER*/isEven;\n\n    // This captures the type `T extends int`.\n    var g = () => x;\n    g = /*info:DOWN_CAST_COMPOSITE*/f;\n    g().isEven;\n    q = g();\n    int r = x;\n  }\n}\n    ');
        } )());
    }

    test_typeSubtyping_assigningClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nvoid main() {\n   dynamic y;\n   Object o;\n   int i = 0;\n   double d = 0.0;\n   num n;\n   A a;\n   B b;\n   y = a;\n   o = a;\n   i = /*error:INVALID_ASSIGNMENT*/a;\n   d = /*error:INVALID_ASSIGNMENT*/a;\n   n = /*error:INVALID_ASSIGNMENT*/a;\n   a = a;\n   b = /*info:DOWN_CAST_IMPLICIT*/a;\n}\n');
        } )());
    }

    test_typeSubtyping_assigningSubclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends A {}\n\nvoid main() {\n   dynamic y;\n   Object o;\n   int i = 0;\n   double d = 0.0;\n   num n;\n   A a;\n   B b;\n   C c;\n   y = b;\n   o = b;\n   i = /*error:INVALID_ASSIGNMENT*/b;\n   d = /*error:INVALID_ASSIGNMENT*/b;\n   n = /*error:INVALID_ASSIGNMENT*/b;\n   a = b;\n   b = b;\n   c = /*error:INVALID_ASSIGNMENT*/b;\n}\n');
        } )());
    }

    test_typeSubtyping_dynamicDowncasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nvoid main() {\n   dynamic y;\n   Object o;\n   int i = 0;\n   double d = 0.0;\n   num n;\n   A a;\n   B b;\n   o = y;\n   i = /*info:DYNAMIC_CAST*/y;\n   d = /*info:DYNAMIC_CAST*/y;\n   n = /*info:DYNAMIC_CAST*/y;\n   a = /*info:DYNAMIC_CAST*/y;\n   b = /*info:DYNAMIC_CAST*/y;\n}\n');
        } )());
    }

    test_typeSubtyping_dynamicIsTop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\n\nvoid main() {\n   dynamic y;\n   Object o;\n   int i = 0;\n   double d = 0.0;\n   num n;\n   A a;\n   B b;\n   y = o;\n   y = i;\n   y = d;\n   y = n;\n   y = a;\n   y = b;\n}\n');
        } )());
    }

    test_typeSubtyping_interfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}\nclass B extends A {}\nclass C extends A {}\nclass D extends B implements C {}\n\nvoid main() {\n   A top;\n   B left;\n   C right;\n   D bot;\n   {\n     top = top;\n     top = left;\n     top = right;\n     top = bot;\n   }\n   {\n     left = /*info:DOWN_CAST_IMPLICIT*/top;\n     left = left;\n     left = /*error:INVALID_ASSIGNMENT*/right;\n     left = bot;\n   }\n   {\n     right = /*info:DOWN_CAST_IMPLICIT*/top;\n     right = /*error:INVALID_ASSIGNMENT*/left;\n     right = right;\n     right = bot;\n   }\n   {\n     bot = /*info:DOWN_CAST_IMPLICIT*/top;\n     bot = /*info:DOWN_CAST_IMPLICIT*/left;\n     bot = /*info:DOWN_CAST_IMPLICIT*/right;\n     bot = bot;\n   }\n}\n');
        } )());
    }

    test_unaryOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {\n  A operator ~() => null;\n  A operator +(int x) => null;\n  A operator -(int x) => null;\n  A operator -() => null;\n}\nclass B extends A {}\nclass C extends B {}\n\nfoo() => new A();\n\ntest() {\n  A a = new A();\n  B b = new B();\n  var c = foo();\n  dynamic d;\n\n  ~a;\n  (/*info:DYNAMIC_INVOKE*/~d);\n\n  !/*error:NON_BOOL_NEGATION_EXPRESSION*/a;\n  !/*info:DYNAMIC_CAST*/d;\n\n  -a;\n  (/*info:DYNAMIC_INVOKE*/-d);\n\n  ++a;\n  --a;\n  (/*info:DYNAMIC_INVOKE*/++d);\n  (/*info:DYNAMIC_INVOKE*/--d);\n\n  a++;\n  a--;\n  (/*info:DYNAMIC_INVOKE*/d++);\n  (/*info:DYNAMIC_INVOKE*/d--);\n\n  ++/*info:DOWN_CAST_IMPLICIT_ASSIGN*/b;\n  --/*info:DOWN_CAST_IMPLICIT_ASSIGN*/b;\n  /*info:DOWN_CAST_IMPLICIT_ASSIGN*/b++;\n  /*info:DOWN_CAST_IMPLICIT_ASSIGN*/b--;\n\n  takesC(C c) => null;\n  takesC(/*info:DOWN_CAST_IMPLICIT*/++/*info:DOWN_CAST_IMPLICIT_ASSIGN*/b);\n  takesC(/*info:DOWN_CAST_IMPLICIT*/--/*info:DOWN_CAST_IMPLICIT_ASSIGN*/b);\n  takesC(/*info:DOWN_CAST_IMPLICIT,info:DOWN_CAST_IMPLICIT_ASSIGN*/b++);\n  takesC(/*info:DOWN_CAST_IMPLICIT,info:DOWN_CAST_IMPLICIT_ASSIGN*/b--);\n}');
        } )());
    }

    test_unboundRedirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Foo {\n  Foo() : /*error:REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR*/this.init();\n}\n ');
        } )());
    }

    test_unboundTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {\n   /*error:UNDEFINED_CLASS*/AToB y;\n}\n');
        } )());
    }

    test_unboundVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {\n   dynamic y = /*error:UNDEFINED_IDENTIFIER*/unboundVariable;\n}\n');
        } )());
    }

    test_universalFunctionSubtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('dynamic foo<T>(dynamic x) => x;\n\nvoid takesDtoD(dynamic f(dynamic x)) {}\n\nvoid test() {\n  // here we currently infer an instantiation.\n  takesDtoD(/*pass should be error:INVALID_ASSIGNMENT*/foo);\n}\n\nclass A {\n  dynamic method(dynamic x) => x;\n}\n\nclass B extends A {\n  /*error:INVALID_METHOD_OVERRIDE*/T method<T>(T x) => x;\n}\n    ');
        } )());
    }

    test_voidSubtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int Foo();\nvoid foo() {}\nvoid main () {\n  Foo x = /*error:INVALID_ASSIGNMENT,info:USE_OF_VOID_RESULT*/foo();\n}\n');
        } )());
    }

    _addMetaLibrary() : void {
        this.addFile('library meta;\nclass _Checked { const _Checked(); }\nconst Object checked = const _Checked();\n\nclass _Virtual { const _Virtual(); }\nconst Object virtual = const _Virtual();\n    ',{
            name : '/meta.dart'});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckerTest() {
    }
}

export namespace CheckerTest_Driver {
    export type Constructors = CheckerTest.Constructors | 'CheckerTest_Driver';
    export type Interface = Omit<CheckerTest_Driver, Constructors>;
}
@DartClass
export class CheckerTest_Driver extends CheckerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_covariantOverride_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_covariantOverride_fields();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckerTest_Driver() {
    }
}

export class properties {
}
