/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/rename_label_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_rename";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RenameLabelTest);
    });
};
export namespace RenameLabelTest {
    export type Constructors = lib3.RenameRefactoringTest.Constructors | 'RenameLabelTest';
    export type Interface = Omit<RenameLabelTest, Constructors>;
}
@DartClass
export class RenameLabelTest extends lib3.RenameRefactoringTest {
    test_checkNewName_LocalVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\ntest:\n  while (true) {\n    break test;\n  }\n}\n');
            this.createRenameRefactoringAtString('test:');
            this.refactoring.newName = null;
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Label name must not be null."});
            this.refactoring.newName = '';
            this.assertRefactoringStatus(this.refactoring.checkNewName(),RefactoringProblemSeverity.FATAL,{
                expectedMessage : "Label name must not be empty."});
            this.refactoring.newName = 'newName';
            this.assertRefactoringStatusOK(this.refactoring.checkNewName());
        } )());
    }

    test_createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\ntest:\n  while (true) {\n    break test;\n  }\n}\n');
            this.createRenameRefactoringAtString('test:');
            expect(this.refactoring.refactoringName,'Rename Label');
            expect(this.refactoring.elementKindName,'label');
            this.refactoring.newName = 'newName';
            return this.assertSuccessfulRefactoring('main() {\nnewName:\n  while (true) {\n    break newName;\n  }\n}\n');
        } )());
    }

    test_oldName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {\ntest:\n  while (true) {\n    break test;\n  }\n}\n');
            this.createRenameRefactoringAtString('test:');
            expect(this.refactoring.oldName,'test');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameLabelTest() {
    }
}

export class properties {
}
