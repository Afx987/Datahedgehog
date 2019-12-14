/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_constructor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameConstructorTest);
    });
};
export namespace RenameConstructorTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameConstructorTest';
    export type Interface = Omit<RenameConstructorTest, Constructors>;
}
@DartClass
export class RenameConstructorTest extends lib3.RenameRefactoringTest {
    test_checkInitialConditions_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\n  new String.fromCharCodes([]);\n}\n');
            this.createRenameRefactoringAtString('fromCharCodes(');
            this.refactoring.newName = 'newName';
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The constructor 'String.fromCharCodes' is defined in the SDK, so cannot be renamed."});
        } )());
    }

    test_checkNewName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.test() {}\n}\n');
            this.createRenameRefactoringAtString('test() {}');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Constructor name must not be null."});
            this.refactoring.newName = 'test';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The new name must be different than the current name."});
            this.refactoring.newName = '';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_checkNewName_hasMember_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.test() {}\n  A.newName() {} // existing\n}\n');
            this._createConstructorDeclarationRefactoring('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = this.refactoring.checkNewName();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Class 'A' already declares constructor with name 'newName'.",expectedContextSearch : 'newName() {} // existing'});
        } )());
    }

    test_checkNewName_hasMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.test() {}\n  newName() {} // existing\n}\n');
            this._createConstructorDeclarationRefactoring('test() {}');
            this.refactoring.newName = 'newName';
            let status : any = this.refactoring.checkNewName();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : "Class 'A' already declares method with name 'newName'.",expectedContextSearch : 'newName() {} // existing'});
        } )());
    }

    test_createChange_add() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A() {} // marker\n  factory A._() = A;\n}\nclass B extends A {\n  B() : super() {}\n}\nmain() {\n  new A();\n}\n');
            this._createConstructorDeclarationRefactoring('() {} // marker');
            expect(this.refactoring.refactoringName,'Rename Constructor');
            expect(this.refactoring.elementKindName,'constructor');
            expect(this.refactoring.oldName,'');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  A.newName() {} // marker\n  factory A._() = A.newName;\n}\nclass B extends A {\n  B() : super.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
        } )());
    }

    test_createChange_add_toSynthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n}\nclass B extends A {\n  B() : super() {}\n}\nmain() {\n  new A();\n}\n');
            this._createConstructorInvocationRefactoring('new A();');
            expect(this.refactoring.refactoringName,'Rename Constructor');
            expect(this.refactoring.elementKindName,'constructor');
            expect(this.refactoring.oldName,'');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  A.newName();\n}\nclass B extends A {\n  B() : super.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
        } )());
    }

    test_createChange_change() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.test() {} // marker\n  factory A._() = A.test;\n}\nclass B extends A {\n  B() : super.test() {}\n}\nmain() {\n  new A.test();\n}\n');
            this._createConstructorDeclarationRefactoring('test() {} // marker');
            expect(this.refactoring.refactoringName,'Rename Constructor');
            expect(this.refactoring.elementKindName,'constructor');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('class A {\n  A.newName() {} // marker\n  factory A._() = A.newName;\n}\nclass B extends A {\n  B() : super.newName() {}\n}\nmain() {\n  new A.newName();\n}\n');
        } )());
    }

    test_createChange_remove() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {\n  A.test() {} // marker\n  factory A._() = A.test;\n}\nclass B extends A {\n  B() : super.test() {}\n}\nmain() {\n  new A.test();\n}\n');
            this._createConstructorDeclarationRefactoring('test() {} // marker');
            expect(this.refactoring.refactoringName,'Rename Constructor');
            expect(this.refactoring.elementKindName,'constructor');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = '';
            return this.assertSuccessfulRefactoring('class A {\n  A() {} // marker\n  factory A._() = A;\n}\nclass B extends A {\n  B() : super() {}\n}\nmain() {\n  new A();\n}\n');
        } )());
    }

    test_newInstance_nullElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let refactoring : any = new bare.createInstance(any,null,this.searchEngine,null,null);
            expect(refactoring,isNull);
        } )());
    }

    _createConstructorDeclarationRefactoring(search : string) : void {
        let element : any = this.findNodeElementAtString(search,(node : any) =>  {
            return is(node, any);
        });
        this.createRenameRefactoringForElement(element);
    }
    _createConstructorInvocationRefactoring(search : string) : void {
        let element : any = this.findNodeElementAtString(search,(node : any) =>  {
            return is(node, any);
        });
        this.createRenameRefactoringForElement(element);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameConstructorTest() {
    }
}

export class properties {
}
