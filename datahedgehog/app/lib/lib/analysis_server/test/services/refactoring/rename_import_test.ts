/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_import_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameImportTest);
    });
};
export namespace RenameImportTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameImportTest';
    export type Interface = Omit<RenameImportTest, Constructors>;
}
@DartClass
export class RenameImportTest extends lib3.RenameRefactoringTest {
    test_checkNewName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("import 'dart:async' as test;");
            this._createRefactoring("import 'dart:");
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Import prefix name must not be null."});
            this.refactoring.newName = 'test';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "The new name must be different than the current name."});
            this.refactoring.newName = '';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_createChange_add() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring("import 'dart:math");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_createChange_add_interpolationExpression_hasCurlyBrackets() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring("import 'dart:async");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:async\' as newName;
        } )());
    }

    test_createChange_add_interpolationExpression_noCurlyBrackets() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring("import 'dart:async");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:async\' as newName;
        } )());
    }

    test_createChange_change_className() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\' as test;
            this._createRefactoring("import 'dart:async");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:math\' as test;
        } )());
    }

    test_createChange_change_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\' as test;
            this._createRefactoring("import 'dart:math");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:math\' as newName;
        } )());
    }

    test_createChange_change_onPrefixElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\' as test;
            this.createRenameRefactoringAtString('test.PI');
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('import \'dart:async\' as test;
        } )());
    }

    test_createChange_remove() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\' as test;
            this._createRefactoring("import 'dart:async");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            expect(this.refactoring.oldName,'test');
            this.refactoring.newName = '';
            return this.assertSuccessfulRefactoring('import \'dart:math\' as test;
        } )());
    }

    test_oldName_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:math\';
            this._createRefactoring("import 'dart:async");
            expect(this.refactoring.refactoringName,'Rename Import Prefix');
            expect(this.refactoring.oldName,'');
        } )());
    }

    _createRefactoring(search : string) : void {
        let directive : any = this.findNodeAtString(search,(node : any) =>  {
            return is(node, any);
        });
        this.createRenameRefactoringForElement(directive.element);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameImportTest() {
    }
}

export class properties {
}