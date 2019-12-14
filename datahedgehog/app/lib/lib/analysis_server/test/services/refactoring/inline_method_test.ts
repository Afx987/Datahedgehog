/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/inline_method_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InlineMethodTest);
    });
};
export namespace InlineMethodTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'InlineMethodTest';
    export type Interface = Omit<InlineMethodTest, Constructors>;
}
@DartClass
export class InlineMethodTest extends lib3.RefactoringTest {
    refactoring : any;

    deleteSource : boolean;

    inlineAll : boolean;

    test_access_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res = test(1, 2);\n}\n');
            this._createRefactoring('test(1, 2)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.refactoringName,'Inline Function');
            expect(this.refactoring.className,isNull);
            expect(this.refactoring.methodName,'test');
            expect(this.refactoring.isDeclaration,isFalse);
        } )());
    }

    test_access_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test(a, b) {\n    return a + b;\n  }\n  main() {\n    var res = test(1, 2);\n  }\n}\n');
            this._createRefactoring('test(a, b)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.refactoringName,'Inline Method');
            expect(this.refactoring.className,'A');
            expect(this.refactoring.methodName,'test');
            expect(this.refactoring.isDeclaration,isTrue);
        } )());
    }

    test_bad_async_intoSyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  Iterable<Future<int>> foo() sync* {\n    yield test;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertConditionsFatal('Cannot inline async into sync*.');
        } )());
    }

    test_bad_async_targetIsSync_doesNotReturnFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  double foo() {\n    test;\n    return 1.2;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertConditionsFatal('Cannot inline async into a function that does not return a Future.');
        } )());
    }

    test_bad_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Stream<int> test() async* {\n    yield 1;\n    yield 2;\n  }\n  foo() {\n    test();\n  }\n}\n');
            this._createRefactoring('test() async*');
            return this._assertConditionsFatal('Cannot inline a generator.');
        } )());
    }

    test_bad_cascadeInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo() {}\n  bar() {}\n  test() {}\n}\nmain() {\n A a = new A();\n a..foo()..test()..bar();\n}\n');
            this._createRefactoring('test() {');
            let status : any = await this.refactoring.checkAllConditions();
            let location = new bare.createInstance(any,null,this.findOffset('..test()'),new core.DartString('..test()').length);
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Cannot inline cascade invocation.',expectedContextRange : location});
        } )());
    }

    test_bad_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.named() {}\n}\n');
            this._createRefactoring('named() {}');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_deleteSource_inlineOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res1 = test(1, 2);\n  var res2 = test(10, 20);\n}\n');
            this._createRefactoring('test(1, 2)');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatusOK(status);
            this.refactoring.deleteSource = true;
            this.refactoring.inlineAll = false;
            status = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'All references must be inlined to remove the source.'});
        } )());
    }

    test_bad_notExecutableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n}\n');
            this._createRefactoring(') {');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_notSimpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var test = 42;\n  var res = test;\n}\n');
            this._createRefactoring('test;');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  operator -(other) => this;\n}\n');
            this._createRefactoring('-(other)');
            return this._assertConditionsFatal('Cannot inline operator.');
        } )());
    }

    test_bad_propertyAccessor_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int fff;\n}\n\nmain(A a) {\n  print(a.fff);\n}\n');
            this._createRefactoring('fff);');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_reference_toClassMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test(a, b) {\n    print(a);\n    print(b);\n  }\n}\nmain() {\n  print(new A().test);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertConditionsFatal('Cannot inline class method reference.');
        } )());
    }

    test_bad_severalReturns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test() {\n  if (true) {\n    return 1;\n  }\n  return 2;\n}\nmain() {\n  var res = test();\n}\n');
            this._createRefactoring('test() {');
            return this._assertConditionsError('Ambiguous return value.');
        } )());
    }

    test_fieldAccessor_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var f;\n  get foo {\n    return f * 2;\n  }\n}\nmain() {\n  A a = new A();\n  print(a.foo);\n}\n');
            this._createRefactoring('foo {');
            return this._assertSuccessfulRefactoring('class A {\n  var f;\n}\nmain() {\n  A a = new A();\n  print(a.f * 2);\n}\n');
        } )());
    }

    test_fieldAccessor_getter_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var f;\n  get foo {\n    return f * 2;\n  }\n}\nclass B {\n  A a = new A();\n}\nmain() {\n  B b = new B();\n  print(b.a.foo);\n}\n');
            this._createRefactoring('foo {');
            return this._assertSuccessfulRefactoring('class A {\n  var f;\n}\nclass B {\n  A a = new A();\n}\nmain() {\n  B b = new B();\n  print(b.a.f * 2);\n}\n');
        } )());
    }

    test_fieldAccessor_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var f;\n  set foo(x) {\n    f = x;\n  }\n}\nmain() {\n  A a = new A();\n  a.foo = 0;\n}\n');
            this._createRefactoring('foo(x) {');
            return this._assertSuccessfulRefactoring('class A {\n  var f;\n}\nmain() {\n  A a = new A();\n  a.f = 0;\n}\n');
        } )());
    }

    test_fieldAccessor_setter_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var f;\n  set foo(x) {\n    f = x;\n  }\n}\nclass B {\n  A a = new A();\n}\nmain() {\n  B b = new B();\n  b.a.foo = 0;\n}\n');
            this._createRefactoring('foo(x) {');
            return this._assertSuccessfulRefactoring('class A {\n  var f;\n}\nclass B {\n  A a = new A();\n}\nmain() {\n  B b = new B();\n  b.a.f = 0;\n}\n');
        } )());
    }

    test_function_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) => a + b;\nmain() {\n  print(test(1, 2));\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print(1 + 2);\n}\n');
        } )());
    }

    test_function_hasReturn_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  print(a);\n  print(b);\n  return a + b;\n}\nmain() {\n  var v;\n  v = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var v;\n  print(1);\n  print(2);\n  v = 1 + 2;\n}\n');
        } )());
    }

    test_function_hasReturn_hasReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test(a, b) {\n  return a + b;\n}\nmain() {\n  var v = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var v = 1 + 2;\n}\n');
        } )());
    }

    test_function_hasReturn_noVars_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  print(a);\n  print(b);\n  return a + b;\n}\nmain() {\n  var v = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print(1);\n  print(2);\n  var v = 1 + 2;\n}\n');
        } )());
    }

    test_function_multilineString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {\n  {\n    test();\n  }\n}\ntest() {\n  print('''\nfirst line\nsecond line\n    ''');\n}\n");
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring("main() {\n  {\n    print('''\nfirst line\nsecond line\n    ''');\n  }\n}\n");
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_fieldSuperClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var c;\n}\nclass B extends A {\n  foo() {\n    test(1, 2);\n  }\n}\ntest(a, b) {\n  var c = a + b;\n  print(c);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('class A {\n  var c;\n}\nclass B extends A {\n  foo() {\n    var c2 = 1 + 2;\n    print(c2);\n  }\n}\n');
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_fieldThisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var c;\n  foo() {\n    test(1, 2);\n  }\n}\ntest(a, b) {\n  var c = a + b;\n  print(c);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('class A {\n  var c;\n  foo() {\n    var c2 = 1 + 2;\n    print(c2);\n  }\n}\n');
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_localAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  var c = a + b;\n  print(c);\n}\nmain() {\n  test(1, 2);\n  var c = 0;\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var c2 = 1 + 2;\n  print(c2);\n  var c = 0;\n}\n');
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_localBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  var c = a + b;\n  print(c);\n}\nmain() {\n  var c = 0;\n  test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var c = 0;\n  var c2 = 1 + 2;\n  print(c2);\n}\n');
        } )());
    }

    test_function_noReturn_hasVars_noConflict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  var c = a + b;\n  print(c);\n}\nmain() {\n  test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var c = 1 + 2;\n  print(c);\n}\n');
        } )());
    }

    test_function_noReturn_noVars_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  print(a);\n  print(b);\n}\nmain() {\n  test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print(1);\n  print(2);\n}\n');
        } )());
    }

    test_function_noReturn_noVars_useIndentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  print(a);\n  print(b);\n}\nmain() {\n  {\n    test(1, 2);\n  }\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  {\n    print(1);\n    print(2);\n  }\n}\n');
        } )());
    }

    test_function_noReturn_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void test(a, b) {\n  print(a + b);\n}\nmain() {\n  test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print(1 + 2);\n}\n');
        } )());
    }

    test_function_notStatement_oneStatement_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {\n  print(p * 2);\n}\nmain() {\n  var v;\n  v = test(0);\n}\n');
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {\n  var v;\n  v = (int p) {\n    print(p * 2);\n  }(0);\n}\n');
        } )());
    }

    test_function_notStatement_oneStatement_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {\n  print(p * 2);\n}\nmain() {\n  var v = test(0);\n}\n');
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {\n  var v = (int p) {\n    print(p * 2);\n  }(0);\n}\n');
        } )());
    }

    test_function_notStatement_severalStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {\n  print(p);\n  print(p * 2);\n}\nmain() {\n  var v = test(0);\n}\n');
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {\n  var v = (int p) {\n    print(p);\n    print(p * 2);\n  }(0);\n}\n');
        } )());
    }

    test_function_notStatement_zeroStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {\n}\nmain() {\n  var v = test(0);\n}\n');
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {\n  var v = (int p) {\n  }(0);\n}\n');
        } )());
    }

    test_function_singleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topLevelField = 0;\ntest() {\n  print(topLevelField);\n}\nmain() {\n  test();\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('var topLevelField = 0;\nmain() {\n  print(topLevelField);\n}\n');
        } )());
    }

    test_getter_async_targetIsAsync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  Future<int> foo() async {\n    return test;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Future<int> foo() async {\n    return 42;\n  }\n}\n');
        } )());
    }

    test_getter_async_targetIsAsyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  Stream<int> foo() async* {\n    yield await test;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Stream<int> foo() async* {\n    yield await 42;\n  }\n}\n');
        } )());
    }

    test_getter_async_targetIsSync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  Future<int> foo() {\n    return test;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Future<int> foo() async {\n    return 42;\n  }\n}\n');
        } )());
    }

    test_getter_async_targetIsSync2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> get test async => 42;\n  Future<int> foo1() {\n    return test;\n  }\n  Future<int> foo2() {\n    return test;\n  }\n}\n');
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Future<int> foo1() async {\n    return 42;\n  }\n  Future<int> foo2() async {\n    return 42;\n  }\n}\n');
        } )());
    }

    test_getter_classMember_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int f;\n  int get result => f + 1;\n}\nmain(A a) {\n  print(a.result);\n}\n');
            this._createRefactoring('result =>');
            return this._assertSuccessfulRefactoring('class A {\n  int f;\n}\nmain(A a) {\n  print(a.f + 1);\n}\n');
        } )());
    }

    test_getter_classMember_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  static int get result => 1 + 2;\n}\nmain() {\n  print(A.result);\n}\n');
            this._createRefactoring('result =>');
            return this._assertSuccessfulRefactoring('class A {\n}\nmain() {\n  print(1 + 2);\n}\n');
        } )());
    }

    test_getter_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('String get message => \'Hello, World!\';\nmain() {\n  print(message);\n}\n');
            this._createRefactoring('message =>');
            return this._assertSuccessfulRefactoring('main() {\n  print(\'Hello, World!\');\n}\n');
        } )());
    }

    test_initialMode_all() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.deleteSource,true);
            expect(this.refactoring.inlineAll,true);
        } )());
    }

    test_initialMode_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res1 = test(1, 2);\n  var res2 = test(10, 20);\n}\n');
            this._createRefactoring('test(1, 2)');
            this.deleteSource = false;
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.deleteSource,false);
            expect(this.refactoring.inlineAll,false);
        } )());
    }

    test_method_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> test() async => 42;\n  Future<int> foo() {\n    return test();\n  }\n}\n');
            this._createRefactoring('test() async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Future<int> foo() async {\n    return 42;\n  }\n}\n');
        } )());
    }

    test_method_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';\nclass A {\n  Future<int> foo() async => 42;\n  Future<int> test() async => await foo();\n  Future bar() {\n    return new Future.value([test(), test()]);\n  }\n}\n');
            this._createRefactoring('test() async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';\nclass A {\n  Future<int> foo() async => 42;\n  Future bar() async {\n    return new Future.value([(await foo()), (await foo())]);\n  }\n}\n');
        } )());
    }

    test_method_emptyBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('abstract class A {\n  test();\n}\nmain(A a) {\n  print(a.test());\n}\n');
            this._createRefactoring('test();');
            return this._assertConditionsFatal('Cannot inline method without body.');
        } )());
    }

    test_method_fieldInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var fA;\n}\nclass B extends A {\n  var fB;\n  test() {\n    print(fA);\n    print(fB);\n    print(this.fA);\n    print(this.fB);\n  }\n}\nmain() {\n  B b = new B();\n  b.test();\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {\n  var fA;\n}\nclass B extends A {\n  var fB;\n}\nmain() {\n  B b = new B();\n  print(b.fA);\n  print(b.fB);\n  print(b.fA);\n  print(b.fB);\n}\n');
        } )());
    }

    test_method_fieldStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  static var FA = 1;\n}\nclass B extends A {\n  static var FB = 2;\n  test() {\n    print(FB);\n    print(A.FA);\n    print(B.FB);\n  }\n}\nmain() {\n  B b = new B();\n  b.test();\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {\n  static var FA = 1;\n}\nclass B extends A {\n  static var FB = 2;\n}\nmain() {\n  B b = new B();\n  print(B.FB);\n  print(A.FA);\n  print(B.FB);\n}\n');
        } )());
    }

    test_method_fieldStatic_sameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  static var F = 1;\n  foo() {\n    test();\n  }\n  test() {\n    print(A.F);\n  }\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {\n  static var F = 1;\n  foo() {\n    print(A.F);\n  }\n}\n');
        } )());
    }

    test_method_methodInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  ma() {}\n}\nclass B extends A {\n  test() {\n    ma();\n    mb();\n  }\n  mb() {}\n}\nmain(B b) {\n  b.test();\n}\n');
            this._createRefactoring('test();');
            return this._assertSuccessfulRefactoring('class A {\n  ma() {}\n}\nclass B extends A {\n  test() {\n    ma();\n    mb();\n  }\n  mb() {}\n}\nmain(B b) {\n  b.ma();\n  b.mb();\n}\n');
        } )());
    }

    test_method_methodStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  static ma() {}\n}\nclass B extends A {\n  static mb() {}\n  test() {\n    mb();\n    A.ma();\n    B.mb();\n  }\n}\nmain(B b) {\n  b.test();\n}\n');
            this._createRefactoring('test();');
            return this._assertSuccessfulRefactoring('class A {\n  static ma() {}\n}\nclass B extends A {\n  static mb() {}\n  test() {\n    mb();\n    A.ma();\n    B.mb();\n  }\n}\nmain(B b) {\n  B.mb();\n  A.ma();\n  B.mb();\n}\n');
        } )());
    }

    test_method_singleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {\n    print(0);\n  }\n  foo() {\n    test();\n  }\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {\n  foo() {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_method_this() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  accept(B b) {}\n}\nclass B {\n  test(A a) {\n    print(this);\n    a.accept(this);\n  }\n}\nmain() {\n  B b = new B();\n  A a = new A();\n  b.test(a);\n}\n');
            this._createRefactoring('test(A a) {');
            return this._assertSuccessfulRefactoring('class A {\n  accept(B b) {}\n}\nclass B {\n}\nmain() {\n  B b = new B();\n  A a = new A();\n  print(b);\n  a.accept(b);\n}\n');
        } )());
    }

    test_method_unqualifiedInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test(a, b) {\n    print(a);\n    print(b);\n    return a + b;\n  }\n  foo() {\n    var v = test(1, 2);\n  }\n}\n');
            this._createRefactoring('test(a, b) {');
            return this._assertSuccessfulRefactoring('class A {\n  foo() {\n    print(1);\n    print(2);\n    var v = 1 + 2;\n  }\n}\n');
        } )());
    }

    test_namedArgument_inBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('fa(pa) => fb(pb: true);\nfb({pb: false}) {}\nmain() {\n  fa(null);\n}\n');
            this._createRefactoring('fa(null)');
            return this._assertSuccessfulRefactoring('fa(pa) => fb(pb: true);\nfb({pb: false}) {}\nmain() {\n  fb(pb: true);\n}\n');
        } )());
    }

    test_namedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test({a: 0, b: 2}) {\n  print(a + b);\n}\nmain() {\n  test(a: 10, b: 20);\n  test(b: 20, a: 10);\n}\n');
            this._createRefactoring('test({');
            return this._assertSuccessfulRefactoring('main() {\n  print(10 + 20);\n  print(10 + 20);\n}\n');
        } )());
    }

    test_noArgument_named_hasDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test({a: 42}) {\n  print(a);\n}\nmain() {\n  test();\n}\n');
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {\n  print(42);\n}\n');
        } )());
    }

    test_noArgument_positional_hasDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test([a = 42]) {\n  print(a);\n}\nmain() {\n  test();\n}\n');
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {\n  print(42);\n}\n');
        } )());
    }

    test_noArgument_positional_noDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test([a]) {\n  print(a);\n}\nmain() {\n  test();\n}\n');
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {\n  print(null);\n}\n');
        } )());
    }

    test_noArgument_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test(a) {\n  print(a);\n}\nmain() {\n  test();\n}\n');
            this._createRefactoring('test();');
            let status : any = await this.refactoring.checkAllConditions();
            let location = new bare.createInstance(any,null,this.findOffset('test();'),new core.DartString('test()').length);
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'No argument for the parameter "a".',expectedContextRange : location});
        } )());
    }

    test_reference_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('String message() => \'Hello, World!\';\nmain() {\n  print(message);\n}\n');
            this._createRefactoring('message()');
            return this._assertSuccessfulRefactoring('main() {\n  print(() => \'Hello, World!\');\n}\n');
        } )());
    }

    test_reference_noStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a || b;\n}\nfoo(p1, p2, p3) => p1 && test(p2, p3);\nbar() => {\n  \'name\' : baz(test)\n};\nbaz(x) {}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('foo(p1, p2, p3) => p1 && (p2 || p3);\nbar() => {\n  \'name\' : baz((a, b) {\n    return a || b;\n  })\n};\nbaz(x) {}\n');
        } )());
    }

    test_reference_toLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  test(a, b) {\n    print(a);\n    print(b);\n  }\n  print(test);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print((a, b) {\n    print(a);\n    print(b);\n  });\n}\n');
        } )());
    }

    test_reference_toTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  print(a);\n  print(b);\n}\nmain() {\n  print(test);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  print((a, b) {\n    print(a);\n    print(b);\n  });\n}\n');
        } )());
    }

    test_removeEmptyLinesBefore_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  before() {\n  }\n\n\n  test() {\n    print(0);\n  }\n\n  foo() {\n    test();\n  }\n}\n');
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {\n  before() {\n  }\n\n  foo() {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_setter_classMember_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int f;\n  void set result(x) {\n    f = x + 1;\n  }\n}\nmain(A a) {\n  a.result = 5;\n}\n');
            this._createRefactoring('result(x)');
            return this._assertSuccessfulRefactoring('class A {\n  int f;\n}\nmain(A a) {\n  a.f = 5 + 1;\n}\n');
        } )());
    }

    test_setter_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void set result(x) {\n  print(x + 1);\n}\nmain() {\n  result = 5;\n}\n');
            this._createRefactoring('result(x)');
            return this._assertSuccessfulRefactoring('main() {\n  print(5 + 1);\n}\n');
        } )());
    }

    test_singleExpression_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var res = 1 + 2;\n}\n');
        } )());
    }

    test_singleExpression_oneUsage_keepMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res = test(1, 2);\n}\n');
            this._createRefactoring('test(a, b)');
            this.deleteSource = false;
            return this._assertSuccessfulRefactoring('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res = 1 + 2;\n}\n');
        } )());
    }

    test_singleExpression_twoUsages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res1 = test(1, 2);\n  var res2 = test(10, 20);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var res1 = 1 + 2;\n  var res2 = 10 + 20;\n}\n');
        } )());
    }

    test_singleExpression_twoUsages_inlineOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res1 = test(1, 2);\n  var res2 = test(10, 20);\n}\n');
            this._createRefactoring('test(1, 2)');
            return this._assertSuccessfulRefactoring('test(a, b) {\n  return a + b;\n}\nmain() {\n  var res1 = 1 + 2;\n  var res2 = test(10, 20);\n}\n');
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_alreadyInMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a * (b);\n}\nmain() {\n  var res = test(1, 2 + 3);\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var res = 1 * (2 + 3);\n}\n');
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_asNeeded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {\n  return a * b;\n}\nmain() {\n  var res1 = test(1, 2 + 3);\n  var res2 = test(1, (2 + 3));\n}\n');
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {\n  var res1 = 1 * (2 + 3);\n  var res2 = 1 * (2 + 3);\n}\n');
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(bool a, bool b) {\n  return a || b;\n}\nmain(bool p, bool p2, bool p3) {\n  var res1 = p && test(p2, p3);\n  var res2 = p || test(p2, p3);\n}\n');
            this._createRefactoring('test(bool a, bool b)');
            return this._assertSuccessfulRefactoring('main(bool p, bool p2, bool p3) {\n  var res1 = p && (p2 || p3);\n  var res2 = p || p2 || p3;\n}\n');
        } )());
    }

    _assertConditionsError(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : message});
        } )());
    }

    _assertConditionsFatal(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : message});
        } )());
    }

    _assertInvalidSelection() : async.Future<any> {
        return this._assertConditionsFatal('Method declaration or reference must be selected to activate this refactoring.');
    }
    _assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatusOK(status);
            if (this.deleteSource != null) {
                this.refactoring.deleteSource = this.deleteSource;
            }
            if (this.inlineAll != null) {
                this.refactoring.inlineAll = this.inlineAll;
            }
            status = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
            let change : any = await this.refactoring.createChange();
            this.refactoringChange = change;
            this.assertTestChangeResult(expectedCode);
        } )());
    }

    _createRefactoring(search : string) : void {
        let offset : number = this.findOffset(search);
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.astProvider,this.testUnit,offset);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineMethodTest() {
    }
}

export class properties {
}
