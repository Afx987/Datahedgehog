/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_library_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameLibraryTest);
    });
};
export namespace RenameLibraryTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameLibraryTest';
    export type Interface = Omit<RenameLibraryTest, Constructors>;
}
@DartClass
export class RenameLibraryTest extends lib3.RenameRefactoringTest {
    test_checkNewName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('library my.app;\n');
            this._createRenameRefactoring();
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Library name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Library name must not be blank."});
            this.refactoring.newName = 'my.app';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The new name must be different than the current name."});
        } )());
    }

    test_createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unitSource : any = this.addSource('/part.dart','part of my.app;\n');
            await this.indexTestUnit('library my.app;\npart \'part.dart\';\n');
            if (!this.enableNewAnalysisDriver) {
                this.index.indexUnit(this.context.resolveCompilationUnit2(unitSource,this.testSource));
            }
            this._createRenameRefactoring();
            expect(this.refactoring.refactoringName,'Rename Library');
            expect(this.refactoring.elementKindName,'library');
            this.refactoring.newName = 'the.new.name';
            await this.assertSuccessfulRefactoring('library the.new.name;\npart \'part.dart\';\n');
            this.assertFileChangeResult('/part.dart','part of the.new.name;\n');
        } )());
    }

    test_createChange_hasWhitespaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unitSource : any = this.addSource('/part.dart','part of my .  app;\n');
            await this.indexTestUnit('library my    . app;\npart \'part.dart\';\n');
            if (!this.enableNewAnalysisDriver) {
                this.index.indexUnit(this.context.resolveCompilationUnit2(unitSource,this.testSource));
            }
            this._createRenameRefactoring();
            expect(this.refactoring.refactoringName,'Rename Library');
            expect(this.refactoring.elementKindName,'library');
            this.refactoring.newName = 'the.new.name';
            await this.assertSuccessfulRefactoring('library the.new.name;\npart \'part.dart\';\n');
            this.assertFileChangeResult('/part.dart','part of the.new.name;\n');
        } )());
    }

    _createRenameRefactoring() : void {
        this.createRenameRefactoringForElement(this.testUnitElement.library);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameLibraryTest() {
    }
}

export class properties {
}
