/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_unit_member_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameUnitMemberTest);
    });
};
export namespace RenameUnitMemberTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameUnitMemberTest';
    export type Interface = Omit<RenameUnitMemberTest, Constructors>;
}
@DartClass
export class RenameUnitMemberTest extends lib3.RenameRefactoringTest {
    test_checkFinalConditions_hasTopLevel_ClassElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\nclass NewName {} // existing\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Library already declares class with name 'NewName'.",expectedContextSearch : 'NewName {} // existing'});
        } )());
    }

    test_checkFinalConditions_hasTopLevel_FunctionTypeAliasElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\ntypedef NewName(); // existing\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Library already declares function type alias with name 'NewName'.",expectedContextSearch : 'NewName(); // existing'});
        } )());
    }

    test_checkFinalConditions_OK_qualifiedSuper_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\nclass A {\n  NewName() {}\n}\nclass B extends A {\n  main() {\n    super.NewName(); // super-ref\n  }\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_publicToPrivate_usedInOtherLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\n');
            await this.indexUnit('/lib.dart','library my.lib;\nimport \'test.dart\';\n\nmain() {\n  new Test();\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = '_NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed class will be invisible in 'my.lib'."});
        } )());
    }

    test_checkFinalConditions_shadowedBy_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\nclass A {\n  void NewName() {}\n  main() {\n    new Test();\n  }\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Reference to renamed class will be shadowed by method 'A.NewName'.",expectedContextSearch : 'NewName() {}'});
        } )());
    }

    test_checkFinalConditions_shadowsInSubClass_importedLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\n');
            await this.indexUnit('/lib.dart','library my.lib;\nimport \'test.dart\';\nclass A {\n  NewName() {}\n}\nclass B extends A {\n  main() {\n    NewName(); // super-ref\n  }",\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed class will shadow method 'A.NewName'."});
        } )());
    }

    test_checkFinalConditions_shadowsInSubClass_importedLib_hideCombinator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\n');
            await this.indexUnit('/lib.dart','library my.lib;\nimport \'test.dart\' hide Test;\nclass A {\n  NewName() {}\n}\nclass B extends A {\n  main() {\n    NewName(); // super-ref\n  }",\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_shadowsInSubClass_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\nclass A {\n  NewName() {}\n}\nclass B extends A {\n  main() {\n    NewName(); // super-ref\n  }\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Renamed class will shadow method 'A.NewName'.",expectedContextSearch : 'NewName(); // super-ref'});
        } )());
    }

    test_checkFinalConditions_shadowsInSubClass_notImportedLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/lib.dart','library my.lib;\nclass A {\n  NewName() {}\n}\nclass B extends A {\n  main() {\n    NewName(); // super-ref\n  }",\n}\n');
            await this.indexTestUnit('class Test {}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkFinalConditions_shadowsInSubClass_notSubClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\nclass A {\n  NewName() {}\n}\nclass B {\n  main(A a) {\n    a.NewName();\n  }\n}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    test_checkInitialConditions_inPubCache_posix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/.pub-cache/lib.dart','class A {}\n');
            await this.indexTestUnit('import \'/.pub-cache/lib.dart\';\nmain() {\n  A a;\n}\n');
            this.createRenameRefactoringAtString('A a');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The class 'A' is defined in a pub package, so cannot be renamed."});
        } )());
    }

    test_checkInitialConditions_inPubCache_windows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/Pub/Cache/lib.dart','class A {}\n');
            await this.indexTestUnit('import \'/Pub/Cache/lib.dart\';\nmain() {\n  A a;\n}\n');
            this.createRenameRefactoringAtString('A a');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The class 'A' is defined in a pub package, so cannot be renamed."});
        } )());
    }

    test_checkInitialConditions_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  String s;\n}\n');
            this.createRenameRefactoringAtString('String s');
            this.refactoring.newName = 'NewName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The class 'String' is defined in the SDK, so cannot be renamed."});
        } )());
    }

    test_checkNewName_ClassElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {}\n');
            this.createRenameRefactoringAtString('Test {}');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Class name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Class name must not be empty."});
            this.refactoring.newName = 'Test';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The new name must be different than the current name."});
            this.refactoring.newName = 'NewName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test() {}\n');
            this.createRenameRefactoringAtString('test() {}');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Function name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Function name must not be empty."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_FunctionTypeAliasElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('typedef Test();\n');
            this.createRenameRefactoringAtString('Test();');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Function type alias name must not be null."});
            this.refactoring.newName = 'NewName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_TopLevelVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var test;\n');
            this.createRenameRefactoringAtString('test;');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Variable name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Variable name must not be empty."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_createChange_ClassElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test implements Other {\n  Test() {}\n  Test.named() {}\n}\nclass Other {\n  factory Other.a() = Test;\n  factory Other.b() = Test.named;\n}\nmain() {\n  Test t1 = new Test();\n  Test t2 = new Test.named();\n}\n');
            this.createRenameRefactoringAtString('Test implements');
            expect(this.refactoring.refactoringName,'Rename Class');
            expect(this.refactoring.elementKindName,'class');
            expect(this.refactoring.oldName,'Test');
            this.refactoring.newName = 'NewName';
            return this.assertSuccessfulRefactoring('class NewName implements Other {\n  NewName() {}\n  NewName.named() {}\n}\nclass Other {\n  factory Other.a() = NewName;\n  factory Other.b() = NewName.named;\n}\nmain() {\n  NewName t1 = new NewName();\n  NewName t2 = new NewName.named();\n}\n');
        } )());
    }

    test_createChange_ClassElement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('class Test {\n}\nmain() {\n  Test(); // invalid code, but still a reference\n}\n');
            this.createRenameRefactoringAtString('Test();');
            expect(this.refactoring.refactoringName,'Rename Class');
            expect(this.refactoring.elementKindName,'class');
            expect(this.refactoring.oldName,'Test');
            this.refactoring.newName = 'NewName';
            return this.assertSuccessfulRefactoring('class NewName {\n}\nmain() {\n  NewName(); // invalid code, but still a reference\n}\n');
        } )());
    }

    test_createChange_ClassElement_parameterTypeNested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class Test {\n}\nmain(f(Test p)) {\n}\n');
            this.createRenameRefactoringAtString('Test {');
            expect(this.refactoring.refactoringName,'Rename Class');
            expect(this.refactoring.oldName,'Test');
            this.refactoring.newName = 'NewName';
            return this.assertSuccessfulRefactoring('class NewName {\n}\nmain(f(NewName p)) {\n}\n');
        } )());
    }

    test_createChange_ClassElement_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}\nclass Test = Object with A;\nmain(Test t) {\n}\n');
            this.createRenameRefactoringAtString('Test =');
            expect(this.refactoring.refactoringName,'Rename Class');
            expect(this.refactoring.elementKindName,'class');
            expect(this.refactoring.oldName,'Test');
            this.refactoring.newName = 'NewName';
            return this.assertSuccessfulRefactoring('class A {}\nclass NewName = Object with A;\nmain(NewName t) {\n}\n');
        } )());
    }

    test_createChange_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test() {}\nfoo() {}\nmain() {\n  print(test);\n  print(test());\n  foo();\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            expect(this.refactoring.refactoringName,'Rename Top-Level Function');
            expect(this.refactoring.elementKindName,'function');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('newName() {}\nfoo() {}\nmain() {\n  print(newName);\n  print(newName());\n  foo();\n}\n');
        } )());
    }

    test_createChange_FunctionElement_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/foo.dart','test() {}\nfoo() {}\n');
            await this.indexTestUnit('import \'foo.dart\';\nmain() {\n  print(test);\n  print(test());\n  foo();\n}\n');
            this.createRenameRefactoringAtString('test);');
            expect(this.refactoring.refactoringName,'Rename Top-Level Function');
            expect(this.refactoring.elementKindName,'function');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('import \'foo.dart\';\nmain() {\n  print(newName);\n  print(newName());\n  foo();\n}\n');
            this.assertFileChangeResult('/foo.dart','newName() {}\nfoo() {}\n');
        } )());
    }

    test_createChange_PropertyAccessorElement_getter_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_PropertyAccessorElement("test {}");
        } )());
    }

    test_createChange_PropertyAccessorElement_getter_usage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_PropertyAccessorElement("test);");
        } )());
    }

    test_createChange_PropertyAccessorElement_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_PropertyAccessorElement("test += 2");
        } )());
    }

    test_createChange_PropertyAccessorElement_setter_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_PropertyAccessorElement("test(x) {}");
        } )());
    }

    test_createChange_PropertyAccessorElement_setter_usage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_PropertyAccessorElement("test = 1");
        } )());
    }

    test_createChange_TopLevelVariableElement_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_TopLevelVariableElement("test = 0");
        } )());
    }

    test_createChange_TopLevelVariableElement_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_TopLevelVariableElement("test);");
        } )());
    }

    test_createChange_TopLevelVariableElement_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_TopLevelVariableElement("test += 2");
        } )());
    }

    test_createChange_TopLevelVariableElement_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._test_createChange_TopLevelVariableElement("test = 1");
        } )());
    }

    _test_createChange_PropertyAccessorElement(search : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('get test {}\nset test(x) {}\nmain() {\n  print(test);\n  test = 1;\n  test += 2;\n}\n');
            this.createRenameRefactoringAtString(search);
            expect(this.refactoring.refactoringName,'Rename Top-Level Variable');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('get newName {}\nset newName(x) {}\nmain() {\n  print(newName);\n  newName = 1;\n  newName += 2;\n}\n');
        } )());
    }

    _test_createChange_TopLevelVariableElement(search : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test = 0;\nmain() {\n  print(test);\n  test = 1;\n  test += 2;\n}\n');
            this.createRenameRefactoringAtString(search);
            expect(this.refactoring.refactoringName,'Rename Top-Level Variable');
            expect(this.refactoring.elementKindName,'top level variable');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('int newName = 0;\nmain() {\n  print(newName);\n  newName = 1;\n  newName += 2;\n}\n');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameUnitMemberTest() {
    }
}

export class properties {
}
