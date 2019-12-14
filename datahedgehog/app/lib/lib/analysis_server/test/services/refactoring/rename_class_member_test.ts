/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_class_member_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameClassMemberTest);
    });
};
export namespace RenameClassMemberTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameClassMemberTest';
    export type Interface = Omit<RenameClassMemberTest, Constructors>;
}
@DartClass
export class RenameClassMemberTest extends lib3.RenameRefactoringTest {
    test_checkFinalConditions_classNameConflict_sameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class NewName {\n  void test() {}\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method has the same name as the declaring class 'NewName'.",expectedContextSearch : 'test() {}'});
        } )());
    }

    test_checkFinalConditions_classNameConflict_subClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  void test() {} // 1\n}\nclass NewName extends A {\n  void test() {} // 2\n}\n');
            this.createRenameRefactoringAtString('test() {} // 1');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method has the same name as the declaring class 'NewName'.",expectedContextSearch : 'test() {} // 2'});
        } )());
    }

    test_checkFinalConditions_classNameConflict_superClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class NewName {\n  void test() {} // 1\n}\nclass B extends NewName {\n  void test() {} // 2\n}\n');
            this.createRenameRefactoringAtString('test() {} // 2');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method has the same name as the declaring class 'NewName'.",expectedContextSearch : 'test() {} // 1'});
        } )());
    }

    test_checkFinalConditions_hasMember_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  newName() {} // existing\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Class 'A' already declares method with name 'newName'.",expectedContextSearch : 'newName() {} // existing'});
        } )());
    }

    test_checkFinalConditions_OK_dropSuffix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('abstract class A {\n  void testOld();\n}\nclass B implements A {\n  void testOld() {}\n}\n');
            this.createRenameRefactoringAtString('testOld() {}');
            this.refactoring.newName = 'test';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_OK_noShadow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int newName;\n}\nclass B {\n  test() {}\n}\nclass C extends A {\n  main() {\n    print(newName);\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_publicToPrivate_usedInOtherLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\n');
            await this.indexUnit('/lib.dart','library my.lib;\nimport \'test.dart\';\n\nmain(A a) {\n  a.test();\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = '_newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method will be invisible in 'my.lib'."});
        } )());
    }

    test_checkFinalConditions_shadowed_byLocalFunction_inSameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  main() {\n    newName() {}\n    test(); // marker\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Usage of renamed method will be shadowed by function 'newName'.",expectedContextSearch : 'test(); // marker'});
        } )());
    }

    test_checkFinalConditions_shadowed_byLocalVariable_inSameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  main() {\n    var newName;\n    test(); // marker\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Usage of renamed method will be shadowed by local variable 'newName'.",expectedContextSearch : 'test(); // marker'});
        } )());
    }

    test_checkFinalConditions_shadowed_byLocalVariable_inSubClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\nclass B extends A {\n  main() {\n    var newName;\n    test(); // marker\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Usage of renamed method will be shadowed by local variable 'newName'.",expectedContextSearch : 'test(); // marker'});
        } )());
    }

    test_checkFinalConditions_shadowed_byLocalVariable_OK_qualifiedReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  main() {\n    var newName;\n    this.test(); // marker\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_shadowed_byLocalVariable_OK_renamedNotUsed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  main() {\n    var newName;\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_shadowed_byParameter_inSameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n  main(newName) {\n    test(); // marker\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Usage of renamed method will be shadowed by parameter 'newName'.",expectedContextSearch : 'test(); // marker'});
        } )());
    }

    test_checkFinalConditions_shadowedBySub_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\nclass B extends A {\n  newName() {} // marker\n  main() {\n    test();\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method will be shadowed by method 'B.newName'.",expectedContextSearch : 'newName() {} // marker'});
        } )());
    }

    test_checkFinalConditions_shadowsSuper_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int newName; // marker\n}\nclass B extends A {\n  test() {}\n}\nclass C extends B {\n  main() {\n    print(newName);\n  }\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method will shadow field 'A.newName'.",expectedContextSearch : 'newName; // marker'});
        } )());
    }

    test_checkFinalConditions_shadowsSuper_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  newName() {} // marker\n}\nclass B extends A {\n  test() {}\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method will shadow method 'A.newName'.",expectedContextSearch : 'newName() {} // marker'});
        } )());
    }

    test_checkFinalConditions_shadowsSuper_MethodElement_otherLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode = 'class A {\n  newName() {} // marker\n}\n';
            await this.indexUnit('/lib.dart',libCode);
            await this.indexTestUnit('import \'lib.dart\';\nclass B extends A {\n  test() {}\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed method will shadow method 'A.newName'.",expectedContextRange : new bare.createInstance(any,null,new core.DartString(libCode).indexOf('newName() {} // marker'),new core.DartString('newName').length)});
        } )());
    }

    test_checkInitialConditions_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  \'abc\'.toUpperCase();\n}\n');
            this.createRenameRefactoringAtString('toUpperCase()');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The method 'String.toUpperCase' is defined in the SDK, so cannot be renamed."});
        } )());
    }

    test_checkInitialConditions_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  operator -(other) => this;\n}\n');
            this.createRenameRefactoringAtString('-(other)');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_checkNewName_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int test;\n}\n');
            this.createRenameRefactoringAtString('test;');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Field name must not be null."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Method name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Method name must not be empty."});
            this.refactoring.newName = 'test';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The new name must be different than the current name."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_createChange_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  int test; // marker\n  main() {\n    print(test);\n    test = 1;\n    test += 2;\n  }\n}\nclass B extends A {\n}\nclass C extends B {\n  get test => 1;\n  set test(x) {}\n}\nmain() {\n  A a = new A();\n  B b = new B();\n  C c = new C();\n  print(a.test);\n  a.test = 1;\n  a.test += 2;\n  print(b.test);\n  b.test = 1;\n  print(c.test);\n  c.test = 1;\n}\n');
            this.createRenameRefactoringAtString('test; // marker');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.elementKindName,'field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  int newName; // marker\n  main() {\n    print(newName);\n    newName = 1;\n    newName += 2;\n  }\n}\nclass B extends A {\n}\nclass C extends B {\n  get newName => 1;\n  set newName(x) {}\n}\nmain() {\n  A a = new A();\n  B b = new B();\n  C c = new C();\n  print(a.newName);\n  a.newName = 1;\n  a.newName += 2;\n  print(b.newName);\n  b.newName = 1;\n  print(c.newName);\n  c.newName = 1;\n}\n');
        } )());
    }

    test_createChange_FieldElement_constructorFieldInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  final test;\n  A() : test = 5;\n}\n');
            this.createRenameRefactoringAtString('test;');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  final newName;\n  A() : newName = 5;\n}\n');
        } )());
    }

    test_createChange_FieldElement_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  final test;\n  A(this.test);\n}\n');
            this.createRenameRefactoringAtString('test;');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  final newName;\n  A(this.newName);\n}\n');
        } )());
    }

    test_createChange_FieldElement_fieldFormalParameter_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  final test;\n  A({this.test});\n}\nmain() {\n  new A(test: 42);\n}\n');
            this.createRenameRefactoringAtString('test;');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  final newName;\n  A({this.newName});\n}\nmain() {\n  new A(newName: 42);\n}\n');
        } )());
    }

    test_createChange_FieldElement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('typedef F(a);\nclass A {\n  F test;\n  main() {\n    test(1);\n  }\n}\nmain() {\n  A a = new A();\n  a.test(2);\n}\n');
            this.createRenameRefactoringAtString('test(2);');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('typedef F(a);\nclass A {\n  F newName;\n  main() {\n    newName(1);\n  }\n}\nmain() {\n  A a = new A();\n  a.newName(2);\n}\n');
        } )());
    }

    test_createChange_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\nclass B extends A {\n  test() {} // marker\n}\nclass C extends B {\n  test() {}\n}\nclass D implements A {\n  test() {}\n}\nclass E {\n  test() {}\n}\nmain() {\n  A a = new A();\n  B b = new B();\n  C c = new C();\n  D d = new D();\n  E e = new E();\n  a.test();\n  b.test();\n  c.test();\n  d.test();\n  e.test();\n}\n');
            this.createRenameRefactoringAtString('test() {} // marker');
            expect(this.refactoring.refactoringName,'Rename Method');
            expect(this.refactoring.elementKindName,'method');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  newName() {}\n}\nclass B extends A {\n  newName() {} // marker\n}\nclass C extends B {\n  newName() {}\n}\nclass D implements A {\n  newName() {}\n}\nclass E {\n  test() {}\n}\nmain() {\n  A a = new A();\n  B b = new B();\n  C c = new C();\n  D d = new D();\n  E e = new E();\n  a.newName();\n  b.newName();\n  c.newName();\n  d.newName();\n  e.test();\n}\n');
        } )());
    }

    test_createChange_MethodElement_potential() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  test() {}\n}\nmain(var a) {\n  a.test(); // 1\n  new A().test();\n  a.test(); // 2\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            expect(this.refactoring.refactoringName,'Rename Method');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('class A {\n  newName() {}\n}\nmain(var a) {\n  a.newName(); // 1\n  new A().newName();\n  a.newName(); // 2\n}\n');
            this.assertPotentialEdits(new core.DartList.literal('test(); // 1','test(); // 2'));
        } )());
    }

    test_createChange_MethodElement_potential_inPubCache() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgLib : string = '/.pub-cache/lib.dart';
            await this.indexUnit(pkgLib,'processObj(p) {\n  p.test();\n}\n');
            await this.indexTestUnit(`import '${pkgLib}';\nclass A {\n  test() {}\n}\nmain(var a) {\n  a.test();\n}\n`);
            this.createRenameRefactoringAtString('test() {}');
            expect(this.refactoring.refactoringName,'Rename Method');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('import \'/.pub-cache/lib.dart\';\nclass A {\n  newName() {}\n}\nmain(var a) {\n  a.newName();\n}\n');
            let fileEdit : any = this.refactoringChange.getFileEdit(pkgLib);
            expect(fileEdit,isNull);
        } )());
    }

    test_createChange_MethodElement_potential_private_otherLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/lib.dart','library lib;\nmain(p) {\n  p._test();\n}\n');
            await this.indexTestUnit('class A {\n  _test() {}\n}\nmain(var a) {\n  a._test();\n  new A()._test();\n}\n');
            this.createRenameRefactoringAtString('_test() {}');
            expect(this.refactoring.refactoringName,'Rename Method');
            expect(this.refactoring.oldName,'_test');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('class A {\n  newName() {}\n}\nmain(var a) {\n  a.newName();\n  new A().newName();\n}\n');
            this.assertNoFileChange('/lib.dart');
        } )());
    }

    test_createChange_PropertyAccessorElement_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  get test {} // marker\n  set test(x) {}\n  main() {\n    print(test);\n    test = 1;\n  }\n}\nclass B extends A {\n  get test {}\n  set test(x) {}\n}\nmain() {\n  A a = new A();\n  print(a.test);\n  a.test = 2;\n\n  B b = new B();\n  print(b.test);\n  b.test = 2;\n}\n');
            this.createRenameRefactoringAtString('test {} // marker');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  get newName {} // marker\n  set newName(x) {}\n  main() {\n    print(newName);\n    newName = 1;\n  }\n}\nclass B extends A {\n  get newName {}\n  set newName(x) {}\n}\nmain() {\n  A a = new A();\n  print(a.newName);\n  a.newName = 2;\n\n  B b = new B();\n  print(b.newName);\n  b.newName = 2;\n}\n');
        } )());
    }

    test_createChange_PropertyAccessorElement_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  get test {}\n  set test(x) {} // marker\n  main() {\n    print(test);\n    test = 1;\n  }\n}\nclass B extends A {\n  get test {}\n  set test(x) {}\n}\nmain() {\n  A a = new A();\n  print(a.test);\n  a.test = 2;\n\n  B b = new B();\n  print(b.test);\n  b.test = 2;\n}\n');
            this.createRenameRefactoringAtString('test(x) {} // marker');
            expect(this.refactoring.refactoringName,'Rename Field');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  get newName {}\n  set newName(x) {} // marker\n  main() {\n    print(newName);\n    newName = 1;\n  }\n}\nclass B extends A {\n  get newName {}\n  set newName(x) {}\n}\nmain() {\n  A a = new A();\n  print(a.newName);\n  a.newName = 2;\n\n  B b = new B();\n  print(b.newName);\n  b.newName = 2;\n}\n');
        } )());
    }

    test_createChange_TypeParameterElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A<Test> {\n  Test field;\n  List<Test> items;\n  Test method(Test p) => null;\n}\n');
            this.createRenameRefactoringAtString('Test> {');
            expect(this.refactoring.refactoringName,'Rename Type Parameter');
            expect(this.refactoring.elementKindName,'type parameter');
            expect(this.refactoring.oldName,'Test');
            this.refactoring.newName = 'NewName';
            return this.assertSuccessfulRefactoring('class A<NewName> {\n  NewName field;\n  List<NewName> items;\n  NewName method(NewName p) => null;\n}\n');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameClassMemberTest() {
    }
}

export class properties {
}
