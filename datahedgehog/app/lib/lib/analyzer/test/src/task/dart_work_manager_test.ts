/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/dart_work_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DartWorkManagerTest);
    });
};
export namespace DartWorkManagerTest {
    export type Constructors = 'DartWorkManagerTest';
    export type Interface = Omit<DartWorkManagerTest, Constructors>;
}
@DartClass
export class DartWorkManagerTest {
    context : any;

    cache : any;

    manager : any;

    caughtException : any;

    source1 : any;

    source2 : any;

    source3 : any;

    source4 : any;

    entry1 : any;

    entry2 : any;

    entry3 : any;

    entry4 : any;

    expect_librarySourceQueue(sources : core.DartList<any>) : void {
        expect(this.manager.librarySourceQueue,unorderedEquals(sources));
    }
    expect_unknownSourceQueue(sources : core.DartList<any>) : void {
        expect(this.manager.unknownSourceQueue,unorderedEquals(sources));
    }
    setUp() : void {
        this.cache = this.context.analysisCache;
        this.manager = new bare.createInstance(any,null,this.context);
        this.entry1 = this._getOrCreateEntry(this.source1);
        this.entry2 = this._getOrCreateEntry(this.source2);
        this.entry3 = this._getOrCreateEntry(this.source3);
        this.entry4 = this._getOrCreateEntry(this.source4);
    }
    test_applyChange_add() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.manager.applyChange(new core.DartList.literal(this.source2),new core.DartList.literal(),new core.DartList.literal());
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_applyChange_add_duplicate() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1));
    }
    test_applyChange_addRemove() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1,this.source2),new core.DartList.literal(),new core.DartList.literal(this.source2,this.source3));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1));
        this.expect_librarySourceQueue(new core.DartList.literal());
    }
    test_applyChange_change() : void {
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source3));
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source4));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(this.source1),new core.DartList.literal());
        this.expect_librarySourceQueue(new core.DartList.literal(this.source3));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source4,this.source1));
    }
    test_applyChange_change_hasSourceKind() : void {
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source3));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(this.source1,this.source2),new core.DartList.literal());
        this.expect_librarySourceQueue(new core.DartList.literal(this.source1));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source2,this.source3));
    }
    test_applyChange_remove() : void {
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source3));
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source4));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source1));
        this.expect_librarySourceQueue(new core.DartList.literal(this.source3));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source4));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source3));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source4));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source4));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal());
    }
    test_applyChange_updatePartsLibraries_changeLibrary() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part1,new core.DartList.literal(library1,library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part2,new core.DartList.literal(library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part3,new core.DartList.literal(library1));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library1,new core.DartList.literal(part1,part3));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library2,new core.DartList.literal(part1,part2));
        this._getOrCreateEntry(part1).setValue(CONTAINING_LIBRARIES,new core.DartList.literal(),new core.DartList.literal());
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.VALID);
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(library1),new core.DartList.literal());
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part1),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),unorderedEquals(new core.DartList.literal()));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),isNull);
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),new core.DartList.literal(part1,part2));
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.INVALID);
    }
    test_applyChange_updatePartsLibraries_changePart() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part1,new core.DartList.literal(library1,library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part2,new core.DartList.literal(library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part3,new core.DartList.literal(library1));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library1,new core.DartList.literal(part1,part3));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library2,new core.DartList.literal(part1,part2));
        this._getOrCreateEntry(part1).setValue(CONTAINING_LIBRARIES,new core.DartList.literal(),new core.DartList.literal());
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.VALID);
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(part1),new core.DartList.literal());
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),unorderedEquals(new core.DartList.literal(library1)));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),new core.DartList.literal(part1,part3));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),new core.DartList.literal(part1,part2));
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.INVALID);
    }
    test_applyChange_updatePartsLibraries_removeLibrary() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part1,new core.DartList.literal(library1,library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part2,new core.DartList.literal(library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part3,new core.DartList.literal(library1));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library1,new core.DartList.literal(part1,part3));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library2,new core.DartList.literal(part1,part2));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(library1));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part1),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),unorderedEquals(new core.DartList.literal()));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),isNull);
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),new core.DartList.literal(part1,part2));
    }
    test_applyChange_updatePartsLibraries_removePart() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part1,new core.DartList.literal(library1,library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part2,new core.DartList.literal(library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part3,new core.DartList.literal(library1));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library1,new core.DartList.literal(part1,part3));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library2,new core.DartList.literal(part1,part2));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(part1));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part1),isNull);
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),unorderedEquals(new core.DartList.literal(library1)));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),new core.DartList.literal(part1,part3));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),new core.DartList.literal(part1,part2));
    }
    test_applyPriorityTargets_isLibrary_computeErrors() : void {
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(true);
        when(this.context.shouldErrorsBeAnalyzed(this.source3)).thenReturn(true);
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry2.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry3.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source1,LIBRARY_ERRORS_READY));
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source2,LIBRARY_ERRORS_READY));
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source2,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,LIBRARY_ERRORS_READY),new bare.createInstance(any,null,this.source3,LIBRARY_ERRORS_READY))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,LIBRARY_ERRORS_READY);
    }
    test_applyPriorityTargets_isLibrary_computeUnit() : void {
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(false);
        when(this.context.shouldErrorsBeAnalyzed(this.source3)).thenReturn(false);
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry2.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry3.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source1,LIBRARY_ERRORS_READY));
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source2,LIBRARY_ERRORS_READY));
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source2,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,new bare.createInstance(any,null,this.source2,this.source2),RESOLVED_UNIT),new bare.createInstance(any,null,new bare.createInstance(any,null,this.source3,this.source3),RESOLVED_UNIT))));
    }
    test_applyPriorityTargets_isPart() : void {
        this.entry1.setValue(SOURCE_KIND,SourceKind.PART,new core.DartList.literal());
        this.entry2.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry3.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal(this.source2,this.source3));
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source1));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,LIBRARY_ERRORS_READY),new bare.createInstance(any,null,this.source3,LIBRARY_ERRORS_READY))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,LIBRARY_ERRORS_READY);
    }
    test_applyPriorityTargets_isUnknown() : void {
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source2,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,SOURCE_KIND),new bare.createInstance(any,null,this.source3,SOURCE_KIND))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,SOURCE_KIND);
    }
    test_getErrors() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,ScannerErrorCode.MISSING_DIGIT);
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,ScannerErrorCode.MISSING_DIGIT);
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal(this.source2));
        this.entry1.setValue(SCAN_ERRORS,new core.DartList.literal<any>(error1),new core.DartList.literal());
        this.context.getCacheEntry(new bare.createInstance(any,null,this.source2,this.source1)).setValue(VERIFY_ERRORS,new core.DartList.literal<any>(error2),new core.DartList.literal());
        let errors : core.DartList<any> = this.manager.getErrors(this.source1);
        expect(errors,unorderedEquals(new core.DartList.literal(error1,error2)));
    }
    test_getErrors_hasFullList() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,ScannerErrorCode.MISSING_DIGIT);
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,ScannerErrorCode.MISSING_DIGIT);
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal(this.source2));
        this.entry1.setValue(DART_ERRORS,new core.DartList.literal<any>(error1,error2),new core.DartList.literal());
        let errors : core.DartList<any> = this.manager.getErrors(this.source1);
        expect(errors,unorderedEquals(new core.DartList.literal(error1,error2)));
    }
    test_getLibrariesContainingPart() : void {
        when(this.context.aboutToComputeResult(anyObject,anyObject)).thenReturn(false);
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part1,new core.DartList.literal(library1,library2));
        op(Op.INDEX_ASSIGN,this.manager.partLibrariesMap,part2,new core.DartList.literal(library2));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library1,new core.DartList.literal(part1));
        op(Op.INDEX_ASSIGN,this.manager.libraryPartsMap,library2,new core.DartList.literal(part1,part2));
        expect(this.manager.getLibrariesContainingPart(part1),unorderedEquals(new core.DartList.literal(library1,library2)));
        expect(this.manager.getLibrariesContainingPart(part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(this.manager.getLibrariesContainingPart(part3),isEmpty);
    }
    test_getLibrariesContainingPart_askResultProvider() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        when(this.context.aboutToComputeResult(anyObject,CONTAINING_LIBRARIES)).thenInvoke((entry : any,result : any) =>  {
            if (op(Op.EQUALS,entry.target,part1)) {
                entry.setValue(result as any,new core.DartList.literal<any>(library1,library2),new core.DartList.literal());
                return true;
            }
            if (op(Op.EQUALS,entry.target,part2)) {
                entry.setValue(result as any,new core.DartList.literal<any>(library2),new core.DartList.literal());
                return true;
            }
            return false;
        });
        expect(this.manager.getLibrariesContainingPart(part1),unorderedEquals(new core.DartList.literal(library1,library2)));
        expect(this.manager.getLibrariesContainingPart(part2),unorderedEquals(new core.DartList.literal(library2)));
        expect(this.manager.getLibrariesContainingPart(part3),isEmpty);
    }
    test_getLibrariesContainingPart_inSDK() : void {
        let part : any = new _SourceMock('part.dart');
        when(part.isInSystemLibrary).thenReturn(true);
        let sdkDartWorkManagerMock : any = new _DartWorkManagerMock();
        when(sdkDartWorkManagerMock.getLibrariesContainingPart(part)).thenReturn(new core.DartList.literal(this.source2,this.source3));
        let sdkContextMock : any = new _InternalAnalysisContextMock();
        when(sdkContextMock.workManagers).thenReturn(new core.DartList.literal(sdkDartWorkManagerMock));
        let sdkMock : any = new _DartSdkMock();
        when(sdkMock.context).thenReturn(sdkContextMock);
        let sourceFactory : any = new _SourceFactoryMock();
        when(sourceFactory.dartSdk).thenReturn(sdkMock);
        when(this.context.sourceFactory).thenReturn(sourceFactory);
        let source : any = new _SourceMock('test.dart');
        when(source.source).thenReturn(source);
        when(source.isInSystemLibrary).thenReturn(true);
        expect(this.manager.getLibrariesContainingPart(part),unorderedEquals(new core.DartList.literal(this.source2,this.source3)));
    }
    test_getNextResult_hasLibraries_firstIsError() : void {
        this.entry1.setErrorState(this.caughtException,new core.DartList.literal(LIBRARY_ERRORS_READY));
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,LIBRARY_ERRORS_READY);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasLibraries_firstIsInvalid() : void {
        this.entry1.setState(LIBRARY_ERRORS_READY,CacheState.INVALID);
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,LIBRARY_ERRORS_READY);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasLibraries_firstIsValid() : void {
        this.entry1.setValue(LIBRARY_ERRORS_READY,true,new core.DartList.literal());
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,LIBRARY_ERRORS_READY);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasPriority_firstIsError() : void {
        this.manager.addPriorityResult(this.source1,SOURCE_KIND);
        this.manager.addPriorityResult(this.source2,SOURCE_KIND);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,SOURCE_KIND),new bare.createInstance(any,null,this.source2,SOURCE_KIND))));
        this.entry1.setErrorState(this.caughtException,new core.DartList.literal(SOURCE_KIND));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,SOURCE_KIND);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,SOURCE_KIND))));
    }
    test_getNextResult_hasPriority_firstIsValid() : void {
        this.manager.addPriorityResult(this.source1,SOURCE_KIND);
        this.manager.addPriorityResult(this.source2,SOURCE_KIND);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,SOURCE_KIND),new bare.createInstance(any,null,this.source2,SOURCE_KIND))));
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,SOURCE_KIND);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,SOURCE_KIND))));
    }
    test_getNextResult_hasUnknown_firstIsError() : void {
        this.entry1.setErrorState(this.caughtException,new core.DartList.literal(SOURCE_KIND));
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,SOURCE_KIND);
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasUnknown_firstIsInvalid() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,SOURCE_KIND);
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasUnknown_firstIsValid() : void {
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,SOURCE_KIND);
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_nothingToDo() : void {
        let request : any = this.manager.getNextResult();
        expect(request,isNull);
    }
    test_getNextResultPriority_hasLibrary() : void {
        this.manager.librarySourceQueue.addAll(new core.DartList.literal(this.source1));
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.NORMAL);
    }
    test_getNextResultPriority_hasPriority() : void {
        this.manager.addPriorityResult(this.source1,SOURCE_KIND);
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.PRIORITY);
    }
    test_getNextResultPriority_hasUnknown() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1));
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.NORMAL);
    }
    test_getNextResultPriority_nothingToDo() : void {
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.NONE);
    }
    test_onAnalysisOptionsChanged() : void {
        when(this.context.exists(anyObject)).thenReturn(true);
        this.entry1.setValue(PARSED_UNIT,AstTestFactory.compilationUnit(),new core.DartList.literal());
        this.entry1.setValue(IMPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(EXPLICITLY_IMPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(EXPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(INCLUDED_PARTS,new core.DartList.literal<any>(),new core.DartList.literal());
        let unitTarget : any = new bare.createInstance(any,null,this.source2,this.source3);
        let unitEntry : any = new bare.createInstance(any,null,unitTarget);
        this.cache.put(unitEntry);
        unitEntry.setValue(BUILD_LIBRARY_ERRORS,new core.DartList.literal<any>(),new core.DartList.literal());
        expect(unitEntry.getState(BUILD_LIBRARY_ERRORS),CacheState.VALID);
        this.manager.onAnalysisOptionsChanged();
        expect(unitEntry.getState(BUILD_LIBRARY_ERRORS),CacheState.INVALID);
        expect(this.entry1.getState(PARSED_UNIT),CacheState.VALID);
        expect(this.entry1.getState(IMPORTED_LIBRARIES),CacheState.VALID);
        expect(this.entry1.getState(EXPLICITLY_IMPORTED_LIBRARIES),CacheState.VALID);
        expect(this.entry1.getState(EXPORTED_LIBRARIES),CacheState.VALID);
        expect(this.entry1.getState(INCLUDED_PARTS),CacheState.VALID);
    }
    test_onResultInvalidated_scheduleInvalidatedLibraries() : void {
        this.entry3.explicitlyAdded = false;
        this.entry1.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry2.setValue(SOURCE_KIND,SourceKind.PART,new core.DartList.literal());
        this.entry3.setValue(SOURCE_KIND,SourceKind.LIBRARY,new core.DartList.literal());
        this.entry1.setValue(LIBRARY_ERRORS_READY,true,new core.DartList.literal());
        this.entry3.setValue(LIBRARY_ERRORS_READY,true,new core.DartList.literal());
        this.entry1.setState(LIBRARY_ERRORS_READY,CacheState.INVALID);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source1));
        this.entry3.setState(LIBRARY_ERRORS_READY,CacheState.INVALID);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source1));
    }
    test_onSourceFactoryChanged() : void {
        when(this.context.exists(anyObject)).thenReturn(true);
        this.entry1.setValue(PARSED_UNIT,AstTestFactory.compilationUnit(),new core.DartList.literal());
        this.entry1.setValue(IMPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(EXPLICITLY_IMPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(EXPORTED_LIBRARIES,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(INCLUDED_PARTS,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(LIBRARY_SPECIFIC_UNITS,new core.DartList.literal<any>(),new core.DartList.literal());
        this.entry1.setValue(UNITS,new core.DartList.literal<any>(),new core.DartList.literal());
        let unitTarget : any = new bare.createInstance(any,null,this.source2,this.source3);
        let unitEntry : any = new bare.createInstance(any,null,unitTarget);
        this.cache.put(unitEntry);
        unitEntry.setValue(BUILD_LIBRARY_ERRORS,new core.DartList.literal<any>(),new core.DartList.literal());
        expect(unitEntry.getState(BUILD_LIBRARY_ERRORS),CacheState.VALID);
        this.manager.onSourceFactoryChanged();
        expect(unitEntry.getState(BUILD_LIBRARY_ERRORS),CacheState.INVALID);
        expect(this.entry1.getState(PARSED_UNIT),CacheState.INVALID);
        expect(this.entry1.getState(IMPORTED_LIBRARIES),CacheState.INVALID);
        expect(this.entry1.getState(EXPLICITLY_IMPORTED_LIBRARIES),CacheState.INVALID);
        expect(this.entry1.getState(EXPORTED_LIBRARIES),CacheState.INVALID);
        expect(this.entry1.getState(INCLUDED_PARTS),CacheState.INVALID);
        expect(this.entry1.getState(LIBRARY_SPECIFIC_UNITS),CacheState.INVALID);
        expect(this.entry1.getState(UNITS),CacheState.INVALID);
    }
    test_resultsComputed_errors_forLibrarySpecificUnit() : void {
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,ScannerErrorCode.MISSING_DIGIT);
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,ScannerErrorCode.MISSING_DIGIT);
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal(this.source2));
        when(this.context.getErrors(this.source1)).thenReturn(new bare.createInstance(any,null,new core.DartList.literal(error1,error2),lineInfo));
        this.entry1.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        this.entry1.setValue(SCAN_ERRORS,new core.DartList.literal<any>(error1),new core.DartList.literal());
        let unitTarget : any = new bare.createInstance(any,null,this.source2,this.source1);
        this.context.getCacheEntry(unitTarget).setValue(VERIFY_ERRORS,new core.DartList.literal<any>(error2),new core.DartList.literal());
        this.manager.resultsComputed(unitTarget,new core.DartMap.literal([
            [RESOLVED_UNIT,AstTestFactory.compilationUnit()]]));
        let notice : any = this.context.getNotice(this.source1);
        expect(notice.errors,unorderedEquals(new core.DartList.literal(error1,error2)));
        expect(notice.lineInfo,lineInfo);
    }
    test_resultsComputed_errors_forSource() : void {
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,ScannerErrorCode.MISSING_DIGIT);
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,ScannerErrorCode.MISSING_DIGIT);
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal(this.source2));
        when(this.context.getErrors(this.source1)).thenReturn(new bare.createInstance(any,null,new core.DartList.literal(error1,error2),lineInfo));
        this.entry1.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        this.entry1.setValue(SCAN_ERRORS,new core.DartList.literal<any>(error1),new core.DartList.literal());
        this.entry1.setValue(PARSE_ERRORS,new core.DartList.literal<any>(error2),new core.DartList.literal());
        this.manager.resultsComputed(this.source1,new core.DartMap.literal([
            [PARSED_UNIT,AstTestFactory.compilationUnit()]]));
        let notice : any = this.context.getNotice(this.source1);
        expect(notice.errors,unorderedEquals(new core.DartList.literal(error1,error2)));
        expect(notice.lineInfo,lineInfo);
    }
    test_resultsComputed_includedParts_updatePartLibraries() : void {
        let part1 : any = new lib3.TestSource('part1.dart');
        let part2 : any = new lib3.TestSource('part2.dart');
        let part3 : any = new lib3.TestSource('part3.dart');
        let library1 : any = new lib3.TestSource('library1.dart');
        let library2 : any = new lib3.TestSource('library2.dart');
        this._getOrCreateEntry(part1).setValue(CONTAINING_LIBRARIES,new core.DartList.literal(),new core.DartList.literal());
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.VALID);
        when(this.context.prioritySources).thenReturn(new core.DartList.literal<any>());
        when(this.context.shouldErrorsBeAnalyzed(anyObject)).thenReturn(false);
        this.manager.resultsComputed(library1,new core.DartMap.literal([
            [INCLUDED_PARTS,new core.DartList.literal(part1,part2)],
            [SOURCE_KIND,SourceKind.LIBRARY]]));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part1),new core.DartList.literal(library1));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),new core.DartList.literal(library1));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),isNull);
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),new core.DartList.literal(part1,part2));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),isNull);
        this.manager.resultsComputed(library2,new core.DartMap.literal([
            [INCLUDED_PARTS,new core.DartList.literal(part2,part3)],
            [SOURCE_KIND,SourceKind.LIBRARY]]));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part1),new core.DartList.literal(library1));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part2),new core.DartList.literal(library1,library2));
        expect(op(Op.INDEX,this.manager.partLibrariesMap,part3),new core.DartList.literal(library2));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library1),new core.DartList.literal(part1,part2));
        expect(op(Op.INDEX,this.manager.libraryPartsMap,library2),new core.DartList.literal(part2,part3));
        expect(this.cache.getState(part1,CONTAINING_LIBRARIES),CacheState.INVALID);
    }
    test_resultsComputed_inSDK() : void {
        let sdkDartWorkManagerMock : any = new _DartWorkManagerMock();
        let sdkContextMock : any = new _InternalAnalysisContextMock();
        when(sdkContextMock.workManagers).thenReturn(new core.DartList.literal(sdkDartWorkManagerMock));
        let sdkMock : any = new _DartSdkMock();
        when(sdkMock.context).thenReturn(sdkContextMock);
        let sourceFactory : any = new _SourceFactoryMock();
        when(sourceFactory.dartSdk).thenReturn(sdkMock);
        when(this.context.sourceFactory).thenReturn(sourceFactory);
        let source : any = new _SourceMock('test.dart');
        when(source.source).thenReturn(source);
        when(source.isInSystemLibrary).thenReturn(true);
        let outputs : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        this.manager.resultsComputed(source,outputs);
        verify(sdkDartWorkManagerMock.resultsComputed(source,outputs)).once();
    }
    test_resultsComputed_noSourceKind() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        this.manager.resultsComputed(this.source1,new core.DartMap.literal([
        ]));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_resultsComputed_notDart() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        this.manager.resultsComputed(new lib3.TestSource('test.html'),new core.DartMap.literal([
        ]));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_resultsComputed_parsedUnit() : void {
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        when(this.context.getLibrariesContaining(this.source1)).thenReturn(new core.DartList.literal());
        when(this.context.getErrors(this.source1)).thenReturn(new bare.createInstance(any,null,new core.DartList.literal(),lineInfo));
        this.entry1.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        let unit : any = AstTestFactory.compilationUnit();
        this.manager.resultsComputed(this.source1,new core.DartMap.literal([
            [PARSED_UNIT,unit]]));
        let notice : any = this.context.getNotice(this.source1);
        expect(notice.parsedDartUnit,unit);
        expect(notice.resolvedDartUnit,isNull);
        expect(notice.lineInfo,lineInfo);
    }
    test_resultsComputed_resolvedUnit() : void {
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        when(this.context.getLibrariesContaining(this.source2)).thenReturn(new core.DartList.literal());
        when(this.context.getErrors(this.source2)).thenReturn(new bare.createInstance(any,null,new core.DartList.literal(),lineInfo));
        this.entry2.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        let unit : any = AstTestFactory.compilationUnit();
        this.manager.resultsComputed(new bare.createInstance(any,null,this.source1,this.source2),new core.DartMap.literal([
            [RESOLVED_UNIT,unit]]));
        let notice : any = this.context.getNotice(this.source2);
        expect(notice.parsedDartUnit,isNull);
        expect(notice.resolvedDartUnit,unit);
        expect(notice.lineInfo,lineInfo);
    }
    test_resultsComputed_sourceKind_isLibrary() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2,this.source3));
        when(this.context.prioritySources).thenReturn(new core.DartList.literal<any>());
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(true);
        this.manager.resultsComputed(this.source2,new core.DartMap.literal([
            [SOURCE_KIND,SourceKind.LIBRARY]]));
        this.expect_librarySourceQueue(new core.DartList.literal(this.source2));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source3));
    }
    test_resultsComputed_sourceKind_isLibrary_isPriority_computeErrors() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2,this.source3));
        when(this.context.prioritySources).thenReturn(new core.DartList.literal<any>(this.source2));
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(true);
        this.manager.resultsComputed(this.source2,new core.DartMap.literal([
            [SOURCE_KIND,SourceKind.LIBRARY]]));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,LIBRARY_ERRORS_READY))));
    }
    test_resultsComputed_sourceKind_isLibrary_isPriority_computeUnit() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2,this.source3));
        when(this.context.prioritySources).thenReturn(new core.DartList.literal<any>(this.source2));
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(false);
        this.manager.resultsComputed(this.source2,new core.DartMap.literal([
            [SOURCE_KIND,SourceKind.LIBRARY]]));
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,new bare.createInstance(any,null,this.source2,this.source2),RESOLVED_UNIT))));
    }
    test_resultsComputed_sourceKind_isPart() : void {
        this.manager.unknownSourceQueue.addAll(new core.DartList.literal(this.source1,this.source2,this.source3));
        this.manager.resultsComputed(this.source2,new core.DartMap.literal([
            [SOURCE_KIND,SourceKind.PART]]));
        this.expect_librarySourceQueue(new core.DartList.literal());
        this.expect_unknownSourceQueue(new core.DartList.literal(this.source1,this.source3));
    }
    test_resultsComputed_updatePartsLibraries_partParsed() : void {
        let part : any = new lib3.TestSource('part.dart');
        expect(this.manager.libraryPartsMap,isEmpty);
        this.manager.resultsComputed(part,new core.DartMap.literal([
            [SOURCE_KIND,SourceKind.PART],
            [INCLUDED_PARTS,new core.DartList.literal<any>()]]));
        expect(this.manager.libraryPartsMap,isEmpty);
    }
    test_unitIncrementallyResolved() : void {
        this.manager.unitIncrementallyResolved(this.source1,this.source2);
        this.expect_librarySourceQueue(new core.DartList.literal(this.source1));
    }
    _getOrCreateEntry(source : any,explicit? : boolean) : any {
        explicit = explicit || true;
        let entry : any = this.cache.get(source);
        if (op(Op.EQUALS,entry,null)) {
            entry = new bare.createInstance(any,null,source);
            entry.explicitlyAdded = explicit;
            this.cache.put(entry);
        }
        return entry;
    }
    constructor() {
    }
    @defaultConstructor
    DartWorkManagerTest() {
        this.context = new _InternalAnalysisContextMock();
        this.caughtException = new bare.createInstance(any,null,null,null);
        this.source1 = new lib3.TestSource('1.dart');
        this.source2 = new lib3.TestSource('2.dart');
        this.source3 = new lib3.TestSource('3.dart');
        this.source4 = new lib3.TestSource('4.dart');
    }
}

export namespace _DartSdkMock {
    export type Constructors = '_DartSdkMock';
    export type Interface = Omit<_DartSdkMock, Constructors>;
}
@DartClass
@Implements(any)
export class _DartSdkMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartSdkMock() {
    }
}

export namespace _DartWorkManagerMock {
    export type Constructors = '_DartWorkManagerMock';
    export type Interface = Omit<_DartWorkManagerMock, Constructors>;
}
@DartClass
@Implements(any)
export class _DartWorkManagerMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartWorkManagerMock() {
    }
}

export namespace _InternalAnalysisContextMock {
    export type Constructors = '_InternalAnalysisContextMock';
    export type Interface = Omit<_InternalAnalysisContextMock, Constructors>;
}
@DartClass
@Implements(any)
export class _InternalAnalysisContextMock extends any implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    privateAnalysisCachePartition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisCache : any;

    _pendingNotices : core.DartMap<any,any>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisOptions : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultInvalidated : any;

    constructor() {
    }
    @defaultConstructor
    _InternalAnalysisContextMock() {
        this._pendingNotices = new core.DartMap.literal([
        ]);
        this.analysisOptions = new bare.createInstance(any,null);
        this.onResultInvalidated = new bare.createInstance(any,null);
        this.privateAnalysisCachePartition = new bare.createInstance(any,null,this);
        this.analysisCache = new bare.createInstance(any,null,new core.DartList.literal(this.privateAnalysisCachePartition));
        this.analysisCache.onResultInvalidated.listen((event : any) =>  {
            this.onResultInvalidated.add(event);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getCacheEntry(target : any) : any {
        let entry : any = this.analysisCache.get(target);
        if (op(Op.EQUALS,entry,null)) {
            entry = new bare.createInstance(any,null,target);
            this.analysisCache.put(entry);
        }
        return entry;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNotice(source : any) : any {
        return this._pendingNotices.putIfAbsent(source,() =>  {
            return new bare.createInstance(any,null,source);
        });
    }
}

export namespace _SourceFactoryMock {
    export type Constructors = '_SourceFactoryMock';
    export type Interface = Omit<_SourceFactoryMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceFactoryMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SourceFactoryMock() {
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock extends any implements any.Interface {
    shortName : string;

    constructor(shortName : string) {
    }
    @defaultConstructor
    _SourceMock(shortName : string) {
        this.shortName = shortName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullName() : string {
        return '/' + this.shortName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.fullName;
    }
}

export class properties {
}
