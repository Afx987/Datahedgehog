/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_local_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameLocalTest);
    });
};
export namespace RenameLocalTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameLocalTest';
    export type Interface = Omit<RenameLocalTest, Constructors>;
}
@DartClass
export class RenameLocalTest extends lib3.RenameRefactoringTest {
    test_checkFinalConditions_hasLocalFunction_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n  newName() => 1;\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate function 'newName'.",expectedContextSearch : 'newName() => 1'});
        } )());
    }

    test_checkFinalConditions_hasLocalFunction_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  newName() => 1;\n  int test = 0;\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate function 'newName'."});
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n  var newName = 1;\n  print(newName);\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            expect(status.problems,hasLength(1));
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate local variable 'newName'.",expectedContextSearch : 'newName = 1;'});
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  var newName = 1;\n  int test = 0;\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate local variable 'newName'.",expectedContextSearch : 'newName = 1;'});
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  {\n    var newName = 1;\n  }\n  {\n    int test = 0;\n  }\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherForEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (int newName in []) {}\n  for (int test in []) {}\n}\n');
            this.createRenameRefactoringAtString('test in');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherForLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  for (int newName = 0; newName < 10; newName++) {}\n  for (int test = 0; test < 10; test++) {}\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n}\nmain2() {\n  var newName = 1;\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_classMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var newName = 1;\n  main() {\n    var test = 0;\n    print(newName);\n  }\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Usage of field "A.newName" declared in "test.dart" ' + 'will be shadowed by renamed local variable.',expectedContextSearch : 'newName);'});
        } )());
    }

    test_checkFinalConditions_shadows_classMember_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  foo({test: 1}) { // in A\n  }\n}\nclass B extends A {\n  var newName = 1;\n  foo({test: 1}) {\n    print(newName);\n  }\n}\n');
            this.createRenameRefactoringAtString('test: 1}) { // in A');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Usage of field "B.newName" declared in "test.dart" ' + 'will be shadowed by renamed parameter.',expectedContextSearch : 'newName);'});
        } )());
    }

    test_checkFinalConditions_shadows_classMemberOK_qualifiedReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  var newName = 1;\n  main() {\n    var test = 0;\n    print(this.newName);\n  }\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_OK_namedParameterReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void f({newName}) {}\nmain() {\n  var test = 0;\n  f(newName: test);\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringFinalConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('newName() {}\nmain() {\n  var test = 0;\n  newName(); // ref\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedContextSearch : 'newName(); // ref'});
        } )());
    }

    test_checkNewName_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test() => 0;\n}\n');
            this.createRenameRefactoringAtString('test() => 0;');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Function name must not be null."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_LocalVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n}\n');
            this.createRenameRefactoringAtString('test = 0;');
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

    test_checkNewName_ParameterElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(test) {\n}\n');
            this.createRenameRefactoringAtString('test) {');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Parameter name must not be null."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_createChange_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test() => 0;\n  print(test);\n  print(test());\n}\n');
            this.createRenameRefactoringAtString('test() => 0');
            expect(this.refactoring.refactoringName,'Rename Local Function');
            expect(this.refactoring.elementKindName,'function');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {\n  int newName() => 0;\n  print(newName);\n  print(newName());\n}\n');
        } )());
    }

    test_createChange_localFunction_sameNameDifferenceScopes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  {\n    int test() => 0;\n    print(test);\n  }\n  {\n    int test() => 1;\n    print(test);\n  }\n  {\n    int test() => 2;\n    print(test);\n  }\n}\n');
            this.createRenameRefactoringAtString('test() => 1');
            expect(this.refactoring.refactoringName,'Rename Local Function');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {\n  {\n    int test() => 0;\n    print(test);\n  }\n  {\n    int newName() => 1;\n    print(newName);\n  }\n  {\n    int test() => 2;\n    print(test);\n  }\n}\n');
        } )());
    }

    test_createChange_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n  test = 1;\n  test += 2;\n  print(test);\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            expect(this.refactoring.refactoringName,'Rename Local Variable');
            expect(this.refactoring.elementKindName,'local variable');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {\n  int newName = 0;\n  newName = 1;\n  newName += 2;\n  print(newName);\n}\n');
        } )());
    }

    test_createChange_localVariable_sameNameDifferenceScopes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  {\n    int test = 0;\n    print(test);\n  }\n  {\n    int test = 1;\n    print(test);\n  }\n  {\n    int test = 2;\n    print(test);\n  }\n}\n');
            this.createRenameRefactoringAtString('test = 1');
            expect(this.refactoring.refactoringName,'Rename Local Variable');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {\n  {\n    int test = 0;\n    print(test);\n  }\n  {\n    int newName = 1;\n    print(newName);\n  }\n  {\n    int test = 2;\n    print(test);\n  }\n}\n');
        } )());
    }

    test_createChange_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunction({int test}) {\n  test = 1;\n  test += 2;\n  print(test);\n}\nmain() {\n  myFunction(test: 2);\n}\n');
            this.createRenameRefactoringAtString('test}) {');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            expect(this.refactoring.elementKindName,'parameter');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('myFunction({int newName}) {\n  newName = 1;\n  newName += 2;\n  print(newName);\n}\nmain() {\n  myFunction(newName: 2);\n}\n');
        } )());
    }

    test_createChange_parameter_named_inOtherFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A({test});\n}\n');
            await this.indexUnit('/test2.dart','import \'test.dart\';\nmain() {\n  new A(test: 2);\n}\n');
            this.createRenameRefactoringAtString('test});');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('class A {\n  A({newName});\n}\n');
            this.assertFileChangeResult('/test2.dart','import \'test.dart\';\nmain() {\n  new A(newName: 2);\n}\n');
        } )());
    }

    test_createChange_parameter_named_updateHierarchy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/test2.dart','library test2;\nclass A {\n  void foo({int test: 1}) {\n    print(test);\n  }\n}\nclass B extends A {\n  void foo({int test: 2}) {\n    print(test);\n  }\n}\n');
            await this.indexTestUnit('import \'test2.dart\';\nmain() {\n  new A().foo(test: 10);\n  new B().foo(test: 20);\n  new C().foo(test: 30);\n}\nclass C extends A {\n  void foo({int test: 3}) {\n    print(test);\n  }\n}\n');
            this.createRenameRefactoringAtString('test: 20');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('import \'test2.dart\';\nmain() {\n  new A().foo(newName: 10);\n  new B().foo(newName: 20);\n  new C().foo(newName: 30);\n}\nclass C extends A {\n  void foo({int newName: 3}) {\n    print(newName);\n  }\n}\n');
            this.assertFileChangeResult('/test2.dart','library test2;\nclass A {\n  void foo({int newName: 1}) {\n    print(newName);\n  }\n}\nclass B extends A {\n  void foo({int newName: 2}) {\n    print(newName);\n  }\n}\n');
        } )());
    }

    test_oldName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  int test = 0;\n}\n');
            this.createRenameRefactoringAtString('test = 0');
            expect(this.refactoring.oldName,'test');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameLocalTest() {
    }
}

export class properties {
}
