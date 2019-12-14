/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/abstract_rename.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export namespace RenameRefactoringTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'RenameRefactoringTest';
    export type Interface = Omit<RenameRefactoringTest, Constructors>;
}
@DartClass
export class RenameRefactoringTest extends lib3.RefactoringTest {
    refactoring : any;

    assertPotentialEdits(searches : core.DartList<string>) : void {
        let expectedOffsets : core.DartSet<number> = new core.DartSet<number>();
        for(let search of searches) {
            let offset : number = this.findOffset(search);
            expectedOffsets.add(offset);
        }
        for(let potentialId of this.refactoring.potentialEditIds) {
            let edit : any = this.findEditById(potentialId);
            expect(edit,isNotNull);
            expectedOffsets.remove(edit.offset);
        }
        expect(expectedOffsets,isEmpty);
    }
    createRenameRefactoringAtString(search : string) : void {
        let identifier : any = this.findIdentifier(search);
        let element : any = identifier.bestElement;
        if (is(element, any)) {
            element = getImportElement(identifier);
        }
        this.createRenameRefactoringForElement(element);
    }
    createRenameRefactoringForElement(element : any) : void {
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.astProvider,element);
        expect(this.refactoring,isNotNull,{
            reason : `No refactoring for '${element}'.`});
    }
    findEditById(id : string) : any {
        for(let fileEdit of this.refactoringChange.edits) {
            for(let edit of fileEdit.edits) {
                if (op(Op.EQUALS,edit.id,id)) {
                    return edit;
                }
            }
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameRefactoringTest() {
    }
}

export class properties {
}
