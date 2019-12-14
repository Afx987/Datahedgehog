/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/status_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RefactoringLocationTest);
        defineReflectiveTests(RefactoringStatusTest);
    });
};
export namespace RefactoringLocationTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'RefactoringLocationTest';
    export type Interface = Omit<RefactoringLocationTest, Constructors>;
}
@DartClass
export class RefactoringLocationTest extends lib3.AbstractSingleUnitTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_createLocation_forElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyClass {}');
            let element : any = this.findElement('MyClass');
            let location : any = newLocation_fromElement(element);
            expect(location.file,'/test.dart');
            expect(location.offset,6);
            expect(location.length,7);
            expect(location.startLine,1);
            expect(location.startColumn,7);
        } )());
    }

    test_createLocation_forMatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyClass {}');
            let element : any = this.findElement('MyClass');
            let sourceRange : any = range.elementName(element);
            let match : any = new bare.createInstance(any,null,element.context,element.library.source.uri.toString(),element.source.uri.toString(),null,sourceRange,true,false);
            let location : any = newLocation_fromMatch(match);
            expect(location.file,'/test.dart');
            expect(location.offset,sourceRange.offset);
            expect(location.length,sourceRange.length);
        } )());
    }

    test_createLocation_forNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n}\n');
            let node : any = this.findNodeAtString('main');
            let location : any = newLocation_fromNode(node);
            expect(location.file,'/test.dart');
            expect(location.offset,node.offset);
            expect(location.length,node.length);
        } )());
    }

    test_createLocation_forUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('');
            let sourceRange : any = new bare.createInstance(any,null,10,20);
            let location : any = newLocation_fromUnit(this.testUnit,sourceRange);
            expect(location.file,'/test.dart');
            expect(location.offset,sourceRange.offset);
            expect(location.length,sourceRange.length);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RefactoringLocationTest() {
    }
}

export namespace RefactoringStatusTest {
    export type Constructors = 'RefactoringStatusTest';
    export type Interface = Omit<RefactoringStatusTest, Constructors>;
}
@DartClass
export class RefactoringStatusTest {
    test_addError() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        expect(refactoringStatus.severity,null);
        refactoringStatus.addError('msg');
        expect(refactoringStatus.severity,RefactoringProblemSeverity.ERROR);
        expect(refactoringStatus.isOK,isFalse);
        expect(refactoringStatus.hasFatalError,isFalse);
        expect(refactoringStatus.hasError,isTrue);
        let problems : core.DartList<any> = refactoringStatus.problems;
        expect(problems,hasLength(1));
        expect(problems[0].message,'msg');
    }
    test_addFatalError_withLocation() : void {
        let location : any = new bare.createInstance(any,null,'/test.dart',1,2,3,4);
        let refactoringStatus : any = new bare.createInstance(any,null);
        expect(refactoringStatus.severity,null);
        refactoringStatus.addFatalError('msg',location);
        expect(refactoringStatus.severity,RefactoringProblemSeverity.FATAL);
        expect(refactoringStatus.isOK,isFalse);
        expect(refactoringStatus.hasFatalError,isTrue);
        expect(refactoringStatus.hasError,isTrue);
        let problems : core.DartList<any> = refactoringStatus.problems;
        expect(problems,hasLength(1));
        expect(problems[0].message,'msg');
        expect(problems[0].location.file,'/test.dart');
        expect(problems[0].location.offset,1);
        expect(problems[0].location.length,2);
        refactoringStatus.addWarning("warning");
        expect(refactoringStatus.severity,RefactoringProblemSeverity.FATAL);
    }
    test_addFatalError_withoutContext() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        expect(refactoringStatus.severity,null);
        refactoringStatus.addFatalError('msg');
        expect(refactoringStatus.severity,RefactoringProblemSeverity.FATAL);
        expect(refactoringStatus.isOK,isFalse);
        expect(refactoringStatus.hasFatalError,isTrue);
        expect(refactoringStatus.hasError,isTrue);
        let problems : core.DartList<any> = refactoringStatus.problems;
        expect(problems,hasLength(1));
        expect(problems[0].message,'msg');
        expect(problems[0].location,isNull);
    }
    test_addStatus_Error_withWarning() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        refactoringStatus.addError("err");
        expect(refactoringStatus.severity,RefactoringProblemSeverity.ERROR);
        {
            let other : any = new bare.createInstance(any,null);
            other.addWarning("warn");
            refactoringStatus.addStatus(other);
        }
        expect(refactoringStatus.severity,RefactoringProblemSeverity.ERROR);
        expect(refactoringStatus.message,'err');
    }
    test_addStatus_Warning_null() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        refactoringStatus.addWarning("warn");
        expect(refactoringStatus.severity,RefactoringProblemSeverity.WARNING);
        refactoringStatus.addStatus(null);
        expect(refactoringStatus.severity,RefactoringProblemSeverity.WARNING);
    }
    test_addStatus_Warning_withError() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        refactoringStatus.addWarning("warn");
        expect(refactoringStatus.severity,RefactoringProblemSeverity.WARNING);
        {
            let other : any = new bare.createInstance(any,null);
            other.addError("err");
            refactoringStatus.addStatus(other);
        }
        expect(refactoringStatus.severity,RefactoringProblemSeverity.ERROR);
        expect(refactoringStatus.message,'err');
    }
    test_addWarning() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        expect(refactoringStatus.severity,null);
        refactoringStatus.addWarning('msg');
        expect(refactoringStatus.severity,RefactoringProblemSeverity.WARNING);
        expect(refactoringStatus.isOK,isFalse);
        expect(refactoringStatus.hasFatalError,isFalse);
        expect(refactoringStatus.hasError,isFalse);
        expect(refactoringStatus.hasWarning,isTrue);
        let problems : core.DartList<any> = refactoringStatus.problems;
        expect(problems,hasLength(1));
        expect(problems[0].message,'msg');
    }
    test_get_problem() : void {
        let refactoringStatus : any = new bare.createInstance(any,null);
        expect(refactoringStatus.problem,isNull);
        expect(refactoringStatus.message,isNull);
        refactoringStatus.addError('msgError');
        refactoringStatus.addWarning('msgWarning');
        refactoringStatus.addFatalError('msgFatalError');
        {
            let problem : any = refactoringStatus.problem;
            expect(problem.severity,RefactoringProblemSeverity.FATAL);
            expect(problem.message,'msgFatalError');
        }
        expect(refactoringStatus.problem.message,'msgFatalError');
    }
    test_newError() : void {
        let location : any = new bare.createInstance(any,null,'/test.dart',1,2,3,4);
        let refactoringStatus : any = new bare.createInstance(any,null,'msg',location);
        expect(refactoringStatus.severity,RefactoringProblemSeverity.ERROR);
        expect(refactoringStatus.problem.message,'msg');
        expect(refactoringStatus.problem.location.file,'/test.dart');
    }
    test_newFatalError() : void {
        let refactoringStatus : any = new bare.createInstance(any,null,'msg');
        expect(refactoringStatus.severity,RefactoringProblemSeverity.FATAL);
        expect(refactoringStatus.message,'msg');
    }
    test_newWarning() : void {
        let refactoringStatus : any = new bare.createInstance(any,null,'msg');
        expect(refactoringStatus.severity,RefactoringProblemSeverity.WARNING);
        expect(refactoringStatus.message,'msg');
    }
    constructor() {
    }
    @defaultConstructor
    RefactoringStatusTest() {
    }
}

export class properties {
}
