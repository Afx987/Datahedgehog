/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/options_work_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OptionsWorkManagerNewFileTest);
        defineReflectiveTests(OptionsWorkManagerOldFileTest);
    });
};
export namespace OptionsWorkManagerTest {
    export type Constructors = 'OptionsWorkManagerTest';
    export type Interface = Omit<OptionsWorkManagerTest, Constructors>;
}
@DartClass
export class OptionsWorkManagerTest {
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

    @AbstractProperty
    get optionsFile() : string{ throw 'abstract'}
    expect_sourceQueue(sources : core.DartList<any>) : void {
        expect(this.manager.sourceQueue,unorderedEquals(sources));
    }
    setUp() : void {
        this.cache = this.context.analysisCache;
        this.manager = new bare.createInstance(any,null,this.context);
        this.source1 = new lib3.TestSource(`test1/${this.optionsFile}`);
        this.source2 = new lib3.TestSource(`test2/${this.optionsFile}`);
        this.source3 = new lib3.TestSource(`test3/${this.optionsFile}`);
        this.source4 = new lib3.TestSource(`test4/${this.optionsFile}`);
        this.entry1 = this.context.getCacheEntry(this.source1);
        this.entry2 = this.context.getCacheEntry(this.source2);
        this.entry3 = this.context.getCacheEntry(this.source3);
        this.entry4 = this.context.getCacheEntry(this.source4);
    }
    test_applyChange_add() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
        this.manager.applyChange(new core.DartList.literal(this.source2),new core.DartList.literal(),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_applyChange_add_duplicate() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
        this.manager.applyChange(new core.DartList.literal(this.source1),new core.DartList.literal(),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
    }
    test_applyChange_change() : void {
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(this.source1),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
    }
    test_applyChange_change_afterAdd() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1,this.source2),new core.DartList.literal(),new core.DartList.literal());
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(this.source1),new core.DartList.literal());
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_applyChange_remove() : void {
        this.manager.applyChange(new core.DartList.literal(this.source1,this.source2),new core.DartList.literal(),new core.DartList.literal());
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source1));
        this.expect_sourceQueue(new core.DartList.literal(this.source2));
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source2));
        this.expect_sourceQueue(new core.DartList.literal());
        this.manager.applyChange(new core.DartList.literal(),new core.DartList.literal(),new core.DartList.literal(this.source3));
        this.expect_sourceQueue(new core.DartList.literal());
    }
    test_applyPriorityTargets() : void {
        when(this.context.shouldErrorsBeAnalyzed(this.source2)).thenReturn(true);
        when(this.context.shouldErrorsBeAnalyzed(this.source3)).thenReturn(true);
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source1,ANALYSIS_OPTIONS_ERRORS));
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source2,ANALYSIS_OPTIONS_ERRORS));
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source2,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,ANALYSIS_OPTIONS_ERRORS),new bare.createInstance(any,null,this.source3,ANALYSIS_OPTIONS_ERRORS))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
    }
    test_getErrors() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,AnalysisOptionsErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,AnalysisOptionsErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        this.entry1.setValue(ANALYSIS_OPTIONS_ERRORS,new core.DartList.literal<any>(error1,error2),new core.DartList.literal());
        let errors : core.DartList<any> = this.manager.getErrors(this.source1);
        expect(errors,unorderedEquals(new core.DartList.literal(error1,error2)));
    }
    test_getNextResult_hasNormal_firstIsError() : void {
        this.entry1.setErrorState(this.caughtException,new core.DartList.literal(ANALYSIS_OPTIONS_ERRORS));
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasNormal_firstIsInvalid() : void {
        this.entry1.setState(ANALYSIS_OPTIONS_ERRORS,CacheState.INVALID);
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasNormal_firstIsValid() : void {
        this.entry1.setValue(ANALYSIS_OPTIONS_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasNormalAndPriority() : void {
        this.entry1.setState(ANALYSIS_OPTIONS_ERRORS,CacheState.INVALID);
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        this.manager.addPriorityResult(this.source3,ANALYSIS_OPTIONS_ERRORS);
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source3);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasPriority() : void {
        this.manager.addPriorityResult(this.source1,ANALYSIS_OPTIONS_ERRORS);
        this.manager.addPriorityResult(this.source2,ANALYSIS_OPTIONS_ERRORS);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,ANALYSIS_OPTIONS_ERRORS),new bare.createInstance(any,null,this.source2,ANALYSIS_OPTIONS_ERRORS))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,ANALYSIS_OPTIONS_ERRORS);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,ANALYSIS_OPTIONS_ERRORS),new bare.createInstance(any,null,this.source2,ANALYSIS_OPTIONS_ERRORS))));
    }
    test_getNextResult_nothingToDo() : void {
        let request : any = this.manager.getNextResult();
        expect(request,isNull);
    }
    test_getNextResultPriority_hasPriority() : void {
        this.manager.addPriorityResult(this.source1,SOURCE_KIND);
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.PRIORITY);
    }
    test_getNextResultPriority_hasSource() : void {
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1));
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.NORMAL);
    }
    test_getNextResultPriority_nothingToDo() : void {
        expect(this.manager.getNextResultPriority(),WorkOrderPriority.NONE);
    }
    test_resultsComputed_errors() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,AnalysisOptionsErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,AnalysisOptionsErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        this.entry1.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        this.entry1.setValue(ANALYSIS_OPTIONS_ERRORS,new core.DartList.literal<any>(error1,error2),new core.DartList.literal());
        this.manager.resultsComputed(this.source1,new core.DartMap.literal([
            [ANALYSIS_OPTIONS_ERRORS,null]]));
        let notice : any = this.context.getNotice(this.source1);
        expect(notice.errors,unorderedEquals(new core.DartList.literal(error1,error2)));
        expect(notice.lineInfo,lineInfo);
    }
    constructor() {
    }
    @defaultConstructor
    OptionsWorkManagerTest() {
        this.context = new _InternalAnalysisContextMock();
        this.caughtException = new bare.createInstance(any,null,null,null);
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

    constructor() {
    }
    @defaultConstructor
    _InternalAnalysisContextMock() {
        this._pendingNotices = new core.DartMap.literal([
        ]);
        this.privateAnalysisCachePartition = new bare.createInstance(any,null,this);
        this.analysisCache = new bare.createInstance(any,null,new core.DartList.literal(this.privateAnalysisCachePartition));
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
    getErrors(source : any) : any {
        let errors : core.DartList<any> = AnalysisError.NO_ERRORS;
        if (AnalysisEngine.isAnalysisOptionsFileName(source.shortName)) {
            errors = this.getCacheEntry(source).getValue(ANALYSIS_OPTIONS_ERRORS);
        }
        return new bare.createInstance(any,null,errors,this.getCacheEntry(source).getValue(LINE_INFO));
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

export namespace OptionsWorkManagerNewFileTest {
    export type Constructors = OptionsWorkManagerTest.Constructors | 'OptionsWorkManagerNewFileTest';
    export type Interface = Omit<OptionsWorkManagerNewFileTest, Constructors>;
}
@DartClass
export class OptionsWorkManagerNewFileTest extends OptionsWorkManagerTest {
    get optionsFile() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OptionsWorkManagerNewFileTest() {
    }
}

export namespace OptionsWorkManagerOldFileTest {
    export type Constructors = OptionsWorkManagerTest.Constructors | 'OptionsWorkManagerOldFileTest';
    export type Interface = Omit<OptionsWorkManagerOldFileTest, Constructors>;
}
@DartClass
export class OptionsWorkManagerOldFileTest extends OptionsWorkManagerTest {
    get optionsFile() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OptionsWorkManagerOldFileTest() {
    }
}

export class properties {
}
