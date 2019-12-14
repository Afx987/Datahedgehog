/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/abstract_refactoring.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var findIdentifierLength : (search : string) => number = (search : string) : number =>  {
    let length : number = 0;
    while (length < new core.DartString(search).length){
        let c : number = new core.DartString(search).codeUnitAt(length);
        if (!(c >= new core.DartString('a').codeUnitAt(0) && c <= new core.DartString('z').codeUnitAt(0) || c >= new core.DartString('A').codeUnitAt(0) && c <= new core.DartString('Z').codeUnitAt(0) || c >= new core.DartString('0').codeUnitAt(0) && c <= new core.DartString('9').codeUnitAt(0))) {
            break;
        }
        length++;
    }
    return length;
};
export namespace RefactoringTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'RefactoringTest';
    export type Interface = Omit<RefactoringTest, Constructors>;
}
@DartClass
export class RefactoringTest extends lib3.AbstractSingleUnitTest {
    index : any;

    searchEngine : any;

    astProvider : any;

    refactoringChange : any;

    @AbstractProperty
    get refactoring() : any{ throw 'abstract'}
    assertFileChangeResult(path : string,expectedCode : string) : void {
        let fileEdit : any = this.refactoringChange.getFileEdit(path);
        expect(fileEdit,isNotNull,{
            reason : `No file edit for ${path}`});
        let file : any = this.provider.getResource(path);
        let ini : string = file.readAsStringSync();
        let actualCode : string = SourceEdit.applySequence(ini,fileEdit.edits);
        expect(actualCode,expectedCode);
    }
    assertNoFileChange(path : string) : void {
        let fileEdit : any = this.refactoringChange.getFileEdit(path);
        expect(fileEdit,isNull);
    }
    assertRefactoringConditionsOK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatusOK(status);
            status = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    assertRefactoringFinalConditionsOK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
        } )());
    }

    assertRefactoringStatus(status : any,expectedSeverity : any,_namedArguments? : {expectedMessage? : string,expectedContextRange? : any,expectedContextSearch? : string}) : void {
        let {expectedMessage,expectedContextRange,expectedContextSearch} = Object.assign({
        }, _namedArguments );
        expect(status.severity,expectedSeverity,{
            reason : status.toString()});
        if (expectedSeverity != null) {
            let problem : any = status.problem;
            expect(problem.severity,expectedSeverity);
            if (expectedMessage != null) {
                expect(problem.message,expectedMessage);
            }
            if (expectedContextRange != null) {
                expect(problem.location.offset,expectedContextRange.offset);
                expect(problem.location.length,expectedContextRange.length);
            }
            if (expectedContextSearch != null) {
                let expectedOffset : number = this.findOffset(expectedContextSearch);
                let expectedLength : number = findIdentifierLength(expectedContextSearch);
                expect(problem.location.offset,expectedOffset);
                expect(problem.location.length,expectedLength);
            }
        }
    }
    assertRefactoringStatusOK(status : any) : void {
        this.assertRefactoringStatus(status,null);
    }
    assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertRefactoringConditionsOK();
            let change : any = await this.refactoring.createChange();
            this.refactoringChange = change;
            this.assertTestChangeResult(expectedCode);
        } )());
    }

    assertTestChangeResult(expectedCode : string) : void {
        let fileEdit : any = this.refactoringChange.getFileEdit(this.testFile);
        expect(fileEdit,isNotNull);
        let actualCode : string = SourceEdit.applySequence(this.testCode,fileEdit.edits);
        expect(actualCode,expectedCode);
    }
    getResolvedUnitWithElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return element.context.resolveCompilationUnit(element.source,element.library);
        } )());
    }

    indexTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(code);
            if (!this.enableNewAnalysisDriver) {
                this.index.indexUnit(this.testUnit);
            }
        } )());
    }

    indexUnit(file : string,code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(file,code);
            if (!this.enableNewAnalysisDriver) {
                let unit : any = await this.resolveLibraryUnit(source);
                this.index.indexUnit(unit);
            }
        } )());
    }

    setUp() : void {
        super.setUp();
        if (this.enableNewAnalysisDriver) {
            this.searchEngine = new bare.createInstance(any,null,new core.DartList.literal(this.driver));
            this.astProvider = new bare.createInstance(any,null,this.driver);
        }else {
            this.index = createMemoryIndex();
            this.searchEngine = new bare.createInstance(any,null,this.index,(_ : any) =>  {
                return new bare.createInstance(any,null,this.context);
            });
            this.astProvider = new bare.createInstance(any,null,this.context);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RefactoringTest() {
    }
}

export class properties {
}
