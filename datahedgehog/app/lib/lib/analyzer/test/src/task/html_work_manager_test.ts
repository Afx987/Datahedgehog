/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/html_work_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(HtmlWorkManagerTest);
        defineReflectiveTests(HtmlWorkManagerIntegrationTest);
    });
};
export namespace HtmlWorkManagerTest {
    export type Constructors = 'HtmlWorkManagerTest';
    export type Interface = Omit<HtmlWorkManagerTest, Constructors>;
}
@DartClass
export class HtmlWorkManagerTest {
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

    expect_sourceQueue(sources : core.DartList<any>) : void {
        expect(this.manager.sourceQueue,unorderedEquals(sources));
    }
    setUp() : void {
        this.cache = this.context.analysisCache;
        this.manager = new bare.createInstance(any,null,this.context);
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
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source1,HTML_ERRORS));
        this.manager.priorityResultQueue.add(new bare.createInstance(any,null,this.source2,HTML_ERRORS));
        this.manager.applyPriorityTargets(new core.DartList.literal(this.source2,this.source3));
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source2,HTML_ERRORS),new bare.createInstance(any,null,this.source3,HTML_ERRORS))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,HTML_ERRORS);
    }
    test_getErrors_fullList() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        this.entry1.setValue(HTML_DOCUMENT_ERRORS,new core.DartList.literal<any>(error1),new core.DartList.literal());
        let script : any = new bare.createInstance(any,null,this.source1,new core.DartList.literal());
        this.entry1.setValue(DART_SCRIPTS,new core.DartList.literal(script),new core.DartList.literal());
        let scriptEntry : any = this.context.getCacheEntry(script);
        scriptEntry.setValue(DART_ERRORS,new core.DartList.literal(error2),new core.DartList.literal());
        let errors : core.DartList<any> = this.manager.getErrors(this.source1);
        expect(errors,unorderedEquals(new core.DartList.literal(error1,error2)));
    }
    test_getErrors_partialList() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        this.entry1.setValue(HTML_DOCUMENT_ERRORS,new core.DartList.literal<any>(error1,error2),new core.DartList.literal());
        let errors : core.DartList<any> = this.manager.getErrors(this.source1);
        expect(errors,unorderedEquals(new core.DartList.literal(error1,error2)));
    }
    test_getNextResult_hasNormal_firstIsError() : void {
        this.entry1.setErrorState(this.caughtException,new core.DartList.literal(HTML_ERRORS));
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,HTML_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasNormal_firstIsInvalid() : void {
        this.entry1.setState(HTML_ERRORS,CacheState.INVALID);
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,HTML_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasNormal_firstIsValid() : void {
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source2);
        expect(request.result,HTML_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source2));
    }
    test_getNextResult_hasNormalAndPriority() : void {
        this.entry1.setState(HTML_ERRORS,CacheState.INVALID);
        this.manager.sourceQueue.addAll(new core.DartList.literal(this.source1,this.source2));
        this.manager.addPriorityResult(this.source3,HTML_ERRORS);
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source3);
        expect(request.result,HTML_ERRORS);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    test_getNextResult_hasPriority() : void {
        this.manager.addPriorityResult(this.source1,HTML_ERRORS);
        this.manager.addPriorityResult(this.source2,HTML_ERRORS);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,HTML_ERRORS),new bare.createInstance(any,null,this.source2,HTML_ERRORS))));
        let request : any = this.manager.getNextResult();
        expect(request.target,this.source1);
        expect(request.result,HTML_ERRORS);
        expect(this.manager.priorityResultQueue,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,this.source1,HTML_ERRORS),new bare.createInstance(any,null,this.source2,HTML_ERRORS))));
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
    test_onAnalysisOptionsChanged() : void {
        when(this.context.exists(anyObject)).thenReturn(true);
        this.entry1.setValue(DART_SCRIPTS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(HTML_DOCUMENT,null,new core.DartList.literal());
        this.entry1.setValue(HTML_DOCUMENT_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(REFERENCED_LIBRARIES,new core.DartList.literal(),new core.DartList.literal());
        this.manager.onAnalysisOptionsChanged();
        expect(this.entry1.getState(DART_SCRIPTS),CacheState.VALID);
        expect(this.entry1.getState(HTML_DOCUMENT),CacheState.VALID);
        expect(this.entry1.getState(HTML_DOCUMENT_ERRORS),CacheState.VALID);
        expect(this.entry1.getState(HTML_ERRORS),CacheState.INVALID);
        expect(this.entry1.getState(REFERENCED_LIBRARIES),CacheState.VALID);
    }
    test_onResultInvalidated_scheduleInvalidatedLibraries() : void {
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry3.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setState(HTML_ERRORS,CacheState.INVALID);
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
        this.entry3.setState(HTML_ERRORS,CacheState.INVALID);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source3));
    }
    test_onSourceFactoryChanged() : void {
        when(this.context.exists(anyObject)).thenReturn(true);
        this.entry1.setValue(DART_SCRIPTS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(HTML_DOCUMENT,null,new core.DartList.literal());
        this.entry1.setValue(HTML_DOCUMENT_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setValue(REFERENCED_LIBRARIES,new core.DartList.literal(),new core.DartList.literal());
        this.manager.onSourceFactoryChanged();
        expect(this.entry1.getState(DART_SCRIPTS),CacheState.VALID);
        expect(this.entry1.getState(HTML_DOCUMENT),CacheState.VALID);
        expect(this.entry1.getState(HTML_DOCUMENT_ERRORS),CacheState.VALID);
        expect(this.entry1.getState(HTML_ERRORS),CacheState.INVALID);
        expect(this.entry1.getState(REFERENCED_LIBRARIES),CacheState.INVALID);
    }
    test_resultsComputed_errors() : void {
        let error1 : any = new bare.createInstance(any,null,this.source1,1,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let error2 : any = new bare.createInstance(any,null,this.source1,2,0,HtmlErrorCode.PARSE_ERROR,new core.DartList.literal(''));
        let lineInfo : any = new bare.createInstance(any,null,new core.DartList.literal(0));
        this.entry1.setValue(LINE_INFO,lineInfo,new core.DartList.literal());
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal<any>(error1,error2),new core.DartList.literal());
        this.manager.resultsComputed(this.source1,new core.DartMap.literal([
            [HTML_ERRORS,null]]));
        let notice : any = this.context.getNotice(this.source1);
        expect(notice.errors,unorderedEquals(new core.DartList.literal(error1,error2)));
        expect(notice.lineInfo,lineInfo);
    }
    constructor() {
    }
    @defaultConstructor
    HtmlWorkManagerTest() {
        this.context = new _InternalAnalysisContextMock();
        this.caughtException = new bare.createInstance(any,null,null,null);
        this.source1 = new lib3.TestSource('1.html');
        this.source2 = new lib3.TestSource('2.html');
        this.source3 = new lib3.TestSource('3.html');
        this.source4 = new lib3.TestSource('4.html');
    }
}

export namespace HtmlWorkManagerIntegrationTest {
    export type Constructors = 'HtmlWorkManagerIntegrationTest';
    export type Interface = Omit<HtmlWorkManagerIntegrationTest, Constructors>;
}
@DartClass
export class HtmlWorkManagerIntegrationTest {
    context : any;

    manager : any;

    source1 : any;

    source2 : any;

    entry1 : any;

    entry2 : any;

    expect_sourceQueue(sources : core.DartList<any>) : void {
        expect(this.manager.sourceQueue,unorderedEquals(sources));
    }
    setUp() : void {
        this.manager = new bare.createInstance(any,null,this.context);
        this.entry1 = this.context.getCacheEntry(this.source1);
        this.entry2 = this.context.getCacheEntry(this.source2);
    }
    test_onResultInvalidated_scheduleInvalidatedLibrariesAfterSetSourceFactory() : void {
        this.context.sourceFactory = new _SourceFactoryMock();
        this.entry1.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry2.setValue(HTML_ERRORS,new core.DartList.literal(),new core.DartList.literal());
        this.entry1.setState(HTML_ERRORS,CacheState.INVALID);
        this.expect_sourceQueue(new core.DartList.literal(this.source1));
        this.entry2.setState(HTML_ERRORS,CacheState.INVALID);
        this.expect_sourceQueue(new core.DartList.literal(this.source1,this.source2));
    }
    constructor() {
    }
    @defaultConstructor
    HtmlWorkManagerIntegrationTest() {
        this.context = new bare.createInstance(any,null);
        this.source1 = new lib3.TestSource('1.html');
        this.source2 = new lib3.TestSource('2.html');
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

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get onResultInvalidated() {
        return this.analysisCache.onResultInvalidated;
    }
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
        let name : string = source.shortName;
        let errors : core.DartList<any> = AnalysisError.NO_ERRORS;
        if (AnalysisEngine.isDartFileName(name) || is(source, any)) {
            errors = this.getCacheEntry(source).getValue(DART_ERRORS);
        }else if (AnalysisEngine.isHtmlFileName(name)) {
            errors = this.getCacheEntry(source).getValue(HTML_ERRORS);
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

export class properties {
}
