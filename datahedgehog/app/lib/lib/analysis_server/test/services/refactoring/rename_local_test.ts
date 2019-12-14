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
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate function 'newName'.",expectedContextSearch : 'newName() => 1'});
        } )());
    }

    test_checkFinalConditions_hasLocalFunction_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate function 'newName'."});
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Duplicate local variable 'newName'.",expectedContextSearch : 'newName = 1;'});
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherForEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test in');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherForLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_hasLocalVariable_otherFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_classMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Usage of field "A.newName" declared in "test.dart" ' + 'will be shadowed by renamed local variable.',expectedContextSearch : 'newName);'});
        } )());
    }

    test_checkFinalConditions_shadows_classMember_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this.createRenameRefactoringAtString('test: 1}) { // in A');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Usage of field "B.newName" declared in "test.dart" ' + 'will be shadowed by renamed parameter.',expectedContextSearch : 'newName);'});
        } )());
    }

    test_checkFinalConditions_shadows_classMemberOK_qualifiedReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_OK_namedParameterReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void f({newName}) {}
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            return this.assertRefactoringFinalConditionsOK();
        } )());
    }

    test_checkFinalConditions_shadows_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('newName() {}
            this.createRenameRefactoringAtString('test = 0');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedContextSearch : 'newName(); // ref'});
        } )());
    }

    test_checkNewName_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('main() {
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
            await this.indexTestUnit('main(test) {
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
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test() => 0');
            expect(this.refactoring.refactoringName,'Rename Local Function');
            expect(this.refactoring.elementKindName,'function');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_createChange_localFunction_sameNameDifferenceScopes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test() => 1');
            expect(this.refactoring.refactoringName,'Rename Local Function');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_createChange_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 0');
            expect(this.refactoring.refactoringName,'Rename Local Variable');
            expect(this.refactoring.elementKindName,'local variable');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_createChange_localVariable_sameNameDifferenceScopes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this.createRenameRefactoringAtString('test = 1');
            expect(this.refactoring.refactoringName,'Rename Local Variable');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_createChange_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('myFunction({int test}) {
            this.createRenameRefactoringAtString('test}) {');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            expect(this.refactoring.elementKindName,'parameter');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('myFunction({int newName}) {
        } )());
    }

    test_createChange_parameter_named_inOtherFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            await this.indexUnit('/test2.dart','import \'test.dart\';
            this.createRenameRefactoringAtString('test});');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('class A {
            this.assertFileChangeResult('/test2.dart','import \'test.dart\';
        } )());
    }

    test_createChange_parameter_named_updateHierarchy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/test2.dart','library test2;
            await this.indexTestUnit('import \'test2.dart\';
            this.createRenameRefactoringAtString('test: 20');
            expect(this.refactoring.refactoringName,'Rename Parameter');
            this.refactoring.newName = 'newName';
            await this.assertSuccessfulRefactoring('import \'test2.dart\';
            this.assertFileChangeResult('/test2.dart','library test2;
        } )());
    }

    test_oldName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
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