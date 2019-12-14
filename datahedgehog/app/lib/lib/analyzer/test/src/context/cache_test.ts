/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/cache_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisCacheTest);
        defineReflectiveTests(CacheEntryTest);
        defineReflectiveTests(CacheFlushManagerTest);
        defineReflectiveTests(SdkCachePartitionTest);
        defineReflectiveTests(UniversalCachePartitionTest);
        defineReflectiveTests(ResultDataTest);
    });
};
export var createCache : (_namedArguments? : {context? : any}) => any = (_namedArguments? : {context? : any}) : any =>  {
    let {context} = Object.assign({
    }, _namedArguments );
    let partition : any = new bare.createInstance(any,null,context);
    return new bare.createInstance(any,null,new core.DartList.literal<any>(partition));
};
export namespace AbstractCacheTest {
    export type Constructors = 'AbstractCacheTest';
    export type Interface = Omit<AbstractCacheTest, Constructors>;
}
@DartClass
export class AbstractCacheTest {
    context : any;

    cache : any;

    setUp() : void {
        this.context = new _InternalAnalysisContextMock();
        when(this.context.prioritySources).thenReturn(new core.DartList.literal());
        this.cache = createCache({
            context : this.context});
        when(this.context.analysisCache).thenReturn(this.cache);
    }
    constructor() {
    }
    @defaultConstructor
    AbstractCacheTest() {
    }
}

export namespace CacheFlushManagerTest {
    export type Constructors = 'CacheFlushManagerTest';
    export type Interface = Omit<CacheFlushManagerTest, Constructors>;
}
@DartClass
export class CacheFlushManagerTest {
    manager : any;

    test_madeActive() {
        this.manager.madeActive();
        expect(this.manager.maxSize,15);
    }
    test_madeIdle() {
        this.manager.madeActive();
        let target : any = new lib3.TestSource();
        let results : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < 15; i++){
            let descriptor : any = new bare.createInstance(any,null,`result${i}`,null);
            results.add(new bare.createInstance(any,null,target,descriptor));
        }
        for(let result of results) {
            this.manager.resultStored(result,null);
        }
        expect(this.manager.recentlyUsed,results);
        expect(this.manager.currentSize,15);
        let resultsToFlush : core.DartList<any> = this.manager.madeIdle();
        expect(this.manager.maxSize,3);
        expect(this.manager.recentlyUsed,results.skip(15 - 3));
        expect(resultsToFlush,results.take(15 - 3));
    }
    test_new() {
        expect(this.manager.maxActiveSize,15);
        expect(this.manager.maxIdleSize,3);
        expect(this.manager.maxSize,15);
        expect(this.manager.currentSize,0);
        expect(this.manager.recentlyUsed,isEmpty);
    }
    test_resultAccessed() {
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null);
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,target,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target,descriptor2);
        let result3 : any = new bare.createInstance(any,null,target,descriptor3);
        this.manager.resultStored(result1,null);
        this.manager.resultStored(result2,null);
        this.manager.resultStored(result3,null);
        expect(this.manager.currentSize,3);
        expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result2,result3)));
        this.manager.resultAccessed(result2);
        expect(this.manager.currentSize,3);
        expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result3,result2)));
    }
    test_resultAccessed_negativeMaxSize() {
        this.manager = new bare.createInstance(any,null,new bare.createInstance(any,null,-1,-1),(target : any) =>  {
            return false;
        });
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,target,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target,descriptor2);
        this.manager.resultStored(result1,null);
        this.manager.resultStored(result2,null);
        expect(this.manager.currentSize,0);
        expect(this.manager.recentlyUsed,isEmpty);
        this.manager.resultAccessed(result2);
        expect(this.manager.currentSize,0);
        expect(this.manager.recentlyUsed,isEmpty);
    }
    test_resultAccessed_noSuchResult() {
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null);
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,target,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target,descriptor2);
        let result3 : any = new bare.createInstance(any,null,target,descriptor3);
        this.manager.resultStored(result1,null);
        this.manager.resultStored(result2,null);
        expect(this.manager.currentSize,2);
        expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result2)));
        this.manager.resultAccessed(result3);
        expect(this.manager.currentSize,2);
        expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result2)));
    }
    test_resultStored() {
        let manager : any = new bare.createInstance(any,null,new bare.createInstance(any,null,3,3),(target : any) =>  {
            return false;
        });
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null);
        let descriptor4 : any = new bare.createInstance(any,null,'result4',null);
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,target,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target,descriptor2);
        let result3 : any = new bare.createInstance(any,null,target,descriptor3);
        let result4 : any = new bare.createInstance(any,null,target,descriptor4);
        manager.resultStored(result1,null);
        manager.resultStored(result2,null);
        manager.resultStored(result3,null);
        expect(manager.currentSize,3);
        expect(manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result2,result3)));
        {
            let resultsToFlush : core.DartList<any> = manager.resultStored(result2,null);
            expect(resultsToFlush,isEmpty);
            expect(manager.currentSize,3);
            expect(manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result3,result2)));
        }
        {
            let resultsToFlush : core.DartList<any> = manager.resultStored(result4,null);
            expect(resultsToFlush,new core.DartList.literal(result1));
            expect(manager.currentSize,3);
            expect(manager.recentlyUsed,orderedEquals(new core.DartList.literal(result3,result2,result4)));
            expect(manager.resultSizeMap,new core.DartMap.literal([
                [result3,1],
                [result2,1],
                [result4,1]]));
        }
    }
    test_resultStored_negativeMaxSize() {
        this.manager = new bare.createInstance(any,null,new bare.createInstance(any,null,-1,-1),(target : any) =>  {
            return false;
        });
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,target,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target,descriptor2);
        this.manager.resultStored(result1,null);
        this.manager.resultStored(result2,null);
        expect(this.manager.currentSize,0);
        expect(this.manager.recentlyUsed,isEmpty);
    }
    test_targetRemoved() {
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null);
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null);
        let target1 : any = new lib3.TestSource('a.dart');
        let target2 : any = new lib3.TestSource('b.dart');
        let result1 : any = new bare.createInstance(any,null,target1,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target2,descriptor2);
        let result3 : any = new bare.createInstance(any,null,target1,descriptor3);
        this.manager.resultStored(result1,null);
        this.manager.resultStored(result2,null);
        this.manager.resultStored(result3,null);
        expect(this.manager.currentSize,3);
        expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result1,result2,result3)));
        expect(this.manager.resultSizeMap,new core.DartMap.literal([
            [result1,1],
            [result2,1],
            [result3,1]]));
        {
            this.manager.targetRemoved(target1);
            expect(this.manager.currentSize,1);
            expect(this.manager.recentlyUsed,orderedEquals(new core.DartList.literal(result2)));
            expect(this.manager.resultSizeMap,new core.DartMap.literal([
                [result2,1]]));
        }
        {
            this.manager.targetRemoved(target2);
            expect(this.manager.currentSize,0);
            expect(this.manager.recentlyUsed,isEmpty);
            expect(this.manager.resultSizeMap,isEmpty);
        }
    }
    constructor() {
    }
    @defaultConstructor
    CacheFlushManagerTest() {
        this.manager = new bare.createInstance(any,null,new bare.createInstance(any,null,15,3),(target : any) =>  {
            return false;
        });
    }
}

export namespace CachePartitionTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'CachePartitionTest';
    export type Interface = Omit<CachePartitionTest, Constructors>;
}
@DartClass
export class CachePartitionTest extends lib3.EngineTestCase {
    @Abstract
    createPartition() : any{ throw 'abstract'}
    test_creation() : void {
        expect(this.createPartition(),isNotNull);
    }
    test_dispose() : void {
        let partition : any = this.createPartition();
        let source1 : any = new lib3.TestSource('/1.dart');
        let source2 : any = new lib3.TestSource('/2.dart');
        let entry1 : any = new bare.createInstance(any,null,source1);
        let entry2 : any = new bare.createInstance(any,null,source2);
        partition.put(entry1);
        partition.put(entry2);
        expect(partition.entryMap,hasLength(2));
        expect(partition.pathToSource,hasLength(2));
        expect(partition.sources,unorderedEquals(new core.DartList.literal(source1,source2)));
        partition.dispose();
        expect(partition.entryMap,isEmpty);
        expect(partition.pathToSource,isEmpty);
        expect(partition.sources,isEmpty);
    }
    test_entrySet() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        partition.put(entry);
        let entryMap : core.DartMap<any,any> = partition.entryMap;
        expect(entryMap,hasLength(1));
        let entryKey : any = entryMap.keys.first;
        expect(entryKey,target);
        expect(entryMap.get(entryKey),entry);
    }
    test_get() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        expect(partition.get(target),isNull);
    }
    test_put_alreadyInPartition() : void {
        let partition1 : any = this.createPartition();
        let partition2 : any = this.createPartition();
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        partition1.put(entry);
        expect(() =>  {
            return partition2.put(entry);
        },throwsStateError);
    }
    test_put_noFlush() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        partition.put(entry);
        expect(partition.get(target),entry);
    }
    test_remove_absent() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        expect(partition.get(target),isNull);
        expect(partition.remove(target),isNull);
        expect(partition.get(target),isNull);
    }
    test_remove_present() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        partition.put(entry);
        expect(partition.get(target),entry);
        expect(partition.remove(target),entry);
        expect(partition.get(target),isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CachePartitionTest() {
    }
}

export namespace ResultDataTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ResultDataTest';
    export type Interface = Omit<ResultDataTest, Constructors>;
}
@DartClass
export class ResultDataTest extends lib3.EngineTestCase {
    test_creation() {
        let value : string = 'value';
        let data : any = new bare.createInstance(any,null,new bare.createInstance(any,null,'test',value));
        expect(data,isNotNull);
        expect(data.state,CacheState.INVALID);
        expect(data.value,value);
    }
    test_flush() {
        let result : any = new bare.createInstance(any,null,'test',-1);
        let data : any = new bare.createInstance(any,null,result);
        data.state = CacheState.VALID;
        data.value = 123;
        data.flush();
        expect(data.state,CacheState.FLUSHED);
        expect(data.value,-1);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResultDataTest() {
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
    analysisOptions : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InternalAnalysisContextMock() {
        this.analysisOptions = new bare.createInstance(any,null);
    }
}

export namespace _KeepContinueDelta {
    export type Constructors = '_KeepContinueDelta';
    export type Interface = Omit<_KeepContinueDelta, Constructors>;
}
@DartClass
@Implements(any)
export class _KeepContinueDelta implements any.Interface {
    source : any;

    keepDescriptor : any;

    constructor(source : any,keepDescriptor : any) {
    }
    @defaultConstructor
    _KeepContinueDelta(source : any,keepDescriptor : any) {
        this.source = source;
        this.keepDescriptor = keepDescriptor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shouldGatherChanges() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    gatherChanges(context : any,target : any,descriptor : any,value : core.DartObject) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    gatherEnd() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(context : any,target : any,descriptor : any,value : core.DartObject) : any {
        if (op(Op.EQUALS,descriptor,this.keepDescriptor)) {
            return DeltaResult.KEEP_CONTINUE;
        }
        return DeltaResult.INVALIDATE;
    }
}

export namespace _TestAnalysisTarget {
    export type Constructors = '_TestAnalysisTarget';
    export type Interface = Omit<_TestAnalysisTarget, Constructors>;
}
@DartClass
@Implements(any)
export class _TestAnalysisTarget implements any.Interface {
    librarySource : any;

    source : any;

    constructor(_namedArguments? : {librarySource? : any,source? : any}) {
    }
    @defaultConstructor
    _TestAnalysisTarget(_namedArguments? : {librarySource? : any,source? : any}) {
        let {librarySource,source} = Object.assign({
        }, _namedArguments );
        this.librarySource = librarySource;
        this.source = source;
    }
}

export namespace AnalysisCacheTest {
    export type Constructors = AbstractCacheTest.Constructors | 'AnalysisCacheTest';
    export type Interface = Omit<AnalysisCacheTest, Constructors>;
}
@DartClass
export class AnalysisCacheTest extends AbstractCacheTest {
    test_creation() : void {
        expect(this.cache,isNotNull);
    }
    test_flush() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'A',null);
        let resultB : any = new bare.createInstance(any,null,'B',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(resultA,'a',TargetedResult.EMPTY_LIST);
        entry.setValue(resultB,'b',TargetedResult.EMPTY_LIST);
        expect(this.cache.getState(target,resultA),CacheState.VALID);
        expect(this.cache.getState(target,resultB),CacheState.VALID);
        expect(this.cache.getValue(target,resultA),'a');
        expect(this.cache.getValue(target,resultB),'b');
        this.cache.flush((target : any,result : any) =>  {
            return op(Op.EQUALS,result,resultA);
        });
        expect(this.cache.getState(target,resultA),CacheState.FLUSHED);
        expect(this.cache.getState(target,resultB),CacheState.VALID);
        expect(this.cache.getValue(target,resultA),isNull);
        expect(this.cache.getValue(target,resultB),'b');
    }
    test_get() : void {
        let target : any = new lib3.TestSource();
        expect(this.cache.get(target),isNull);
    }
    test_getContextFor() : void {
        let target : any = new lib3.TestSource();
        expect(this.cache.getContextFor(target),this.context);
    }
    test_getSourcesWithFullName() : void {
        let filePath : string = '/foo/lib/file.dart';
        expect(this.cache.getSourcesWithFullName(filePath),isEmpty);
        let source1 : lib3.TestSourceWithUri = new lib3.TestSourceWithUri(filePath,lib4.Uri.parse(`file://${filePath}`));
        this.cache.put(new bare.createInstance(any,null,source1));
        expect(this.cache.getSourcesWithFullName(filePath),unorderedEquals(new core.DartList.literal(source1)));
        let source2 : lib3.TestSourceWithUri = new lib3.TestSourceWithUri(filePath,lib4.Uri.parse('package:foo/file.dart'));
        this.cache.put(new bare.createInstance(any,null,source2));
        expect(this.cache.getSourcesWithFullName(filePath),unorderedEquals(new core.DartList.literal(source1,source2)));
        this.cache.remove(source1);
        expect(this.cache.getSourcesWithFullName(filePath),unorderedEquals(new core.DartList.literal(source2)));
        this.cache.remove(source2);
        expect(this.cache.getSourcesWithFullName(filePath),isEmpty);
        this.cache.remove(source1);
        this.cache.remove(source2);
        expect(this.cache.getSourcesWithFullName(filePath),isEmpty);
    }
    test_getState_hasEntry_flushed() : void {
        let result : any = new bare.createInstance(any,null,'result',-1);
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setState(result,CacheState.FLUSHED);
        expect(this.cache.getState(target,result),CacheState.FLUSHED);
    }
    test_getState_hasEntry_valid() : void {
        let result : any = new bare.createInstance(any,null,'result',null);
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,'',new core.DartList.literal());
        expect(this.cache.getState(target,result),CacheState.VALID);
    }
    test_getState_noEntry() : void {
        let result : any = new bare.createInstance(any,null,'result',-1);
        let target : any = new lib3.TestSource();
        expect(this.cache.getState(target,result),CacheState.INVALID);
    }
    test_getValue_hasEntry_valid() : void {
        let result : any = new bare.createInstance(any,null,'result',-1);
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,111,new core.DartList.literal());
        expect(this.cache.getValue(target,result),111);
    }
    test_getValue_noEntry() : void {
        let result : any = new bare.createInstance(any,null,'result',-1);
        let target : any = new lib3.TestSource();
        expect(this.cache.getValue(target,result),-1);
    }
    test_iterator() : void {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let iterator : any = this.cache.iterator();
        expect(iterator.moveNext(),isTrue);
        expect(iterator.key,same(target));
        expect(iterator.value,same(entry));
        expect(iterator.moveNext(),isFalse);
    }
    test_put() : void {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        expect(this.cache.get(target),isNull);
        this.cache.put(entry);
        expect(this.cache.get(target),entry);
    }
    test_remove() : void {
        let target1 : any = new lib3.TestSource('/a.dart');
        let target2 : any = new lib3.TestSource('/b.dart');
        let target3 : any = new lib3.TestSource('/c.dart');
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        let entry3 : any = new bare.createInstance(any,null,target3);
        this.cache.put(entry1);
        this.cache.put(entry2);
        this.cache.put(entry3);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        entry1.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry2.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target1,result1)));
        entry3.setValue(result3,333,new core.DartList.literal());
        expect(entry1.getState(result1),CacheState.VALID);
        expect(entry2.getState(result2),CacheState.VALID);
        expect(entry3.getState(result3),CacheState.VALID);
        expect(entry1.getValue(result1),111);
        expect(entry2.getValue(result2),222);
        expect(entry3.getValue(result3),333);
        expect(this.cache.remove(target1),entry1);
        expect(this.cache.get(target1),isNull);
        expect(this.cache.get(target2),isNull);
        expect(this.cache.get(target3),entry3);
        expect(entry3.getState(result3),CacheState.VALID);
    }
    test_remove_invalidateResults_sameTarget() : void {
        let target : any = new lib3.TestSource('/a.dart');
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        entry.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target,result1)));
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getValue(result1),111);
        expect(entry.getValue(result2),222);
        expect(this.cache.remove(target),entry);
        expect(this.cache.get(target),isNull);
        expect(entry.getState(result2),CacheState.INVALID);
    }
    test_size() : void {
        let size : number = 4;
        for(let i : number = 0; i < size; i++){
            let target : any = new lib3.TestSource(`/test${i}.dart`);
            this.cache.put(new bare.createInstance(any,null,target));
        }
        expect(this.cache.size(),size);
    }
    test_sources() : void {
        let source1 : any = new lib3.TestSource('1.dart');
        let source2 : any = new lib3.TestSource('2.dart');
        let target1 : any = new _TestAnalysisTarget();
        expect(this.cache.sources,isEmpty);
        this.cache.put(new bare.createInstance(any,null,source1));
        expect(this.cache.sources,unorderedEquals(new core.DartList.literal(source1)));
        this.cache.put(new bare.createInstance(any,null,target1));
        expect(this.cache.sources,unorderedEquals(new core.DartList.literal(source1)));
        this.cache.put(new bare.createInstance(any,null,source2));
        expect(this.cache.sources,unorderedEquals(new core.DartList.literal(source1,source2)));
        this.cache.remove(source1);
        expect(this.cache.sources,unorderedEquals(new core.DartList.literal(source2)));
        this.cache.remove(source2);
        expect(this.cache.sources,isEmpty);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisCacheTest() {
    }
}

export namespace CacheEntryTest {
    export type Constructors = AbstractCacheTest.Constructors | 'CacheEntryTest';
    export type Interface = Omit<CacheEntryTest, Constructors>;
}
@DartClass
export class CacheEntryTest extends AbstractCacheTest {
    test_dispose() {
        let descriptor1 : any = new bare.createInstance(any,null,'result1',-1);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',-2);
        let target1 : any = new lib3.TestSource('1.dart');
        let target2 : any = new lib3.TestSource('2.dart');
        let result1 : any = new bare.createInstance(any,null,target1,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target2,descriptor2);
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        this.cache.put(entry1);
        this.cache.put(entry2);
        entry1.setValue(descriptor1,1,TargetedResult.EMPTY_LIST);
        entry2.setValue(descriptor2,2,new core.DartList.literal<any>(result1));
        expect(entry1.getResultData(descriptor1).dependentResults,contains(result2));
        entry2.dispose();
        expect(entry1.getResultData(descriptor1).dependentResults,isEmpty);
    }
    test_explicitlyAdded() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        expect(entry.explicitlyAdded,false);
        entry.explicitlyAdded = true;
        expect(entry.explicitlyAdded,true);
    }
    test_fixExceptionState_error_exception() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let exception : any = new bare.createInstance(any,null,null,null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setErrorState(exception,new core.DartList.literal<any>(result));
        entry.fixExceptionState();
        expect(entry.getState(result),CacheState.ERROR);
        expect(entry.exception,exception);
    }
    test_fixExceptionState_noError_exception() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let exception : any = new bare.createInstance(any,null,null,null);
        entry.setErrorState(exception,new core.DartList.literal<any>(result));
        entry.setValue(result,1,TargetedResult.EMPTY_LIST);
        entry.fixExceptionState();
        expect(entry.exception,isNull);
    }
    test_fixExceptionState_noError_noException() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        entry.fixExceptionState();
        expect(entry.getState(result),CacheState.INVALID);
        expect(entry.exception,isNull);
    }
    test_flush() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'A',null);
        let resultB : any = new bare.createInstance(any,null,'B',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(resultA,'a',TargetedResult.EMPTY_LIST);
        entry.setValue(resultB,'b',TargetedResult.EMPTY_LIST);
        expect(entry.getState(resultA),CacheState.VALID);
        expect(entry.getState(resultB),CacheState.VALID);
        expect(entry.getValue(resultA),'a');
        expect(entry.getValue(resultB),'b');
        entry.flush((target : any,result : any) =>  {
            return op(Op.EQUALS,result,resultA);
        });
        expect(entry.getState(resultA),CacheState.FLUSHED);
        expect(entry.getState(resultB),CacheState.VALID);
        expect(entry.getValue(resultA),isNull);
        expect(entry.getValue(resultB),'b');
    }
    test_getState() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        expect(entry.getState(result),CacheState.INVALID);
    }
    test_getValue_default() {
        let target : any = new lib3.TestSource();
        let defaultValue : string = 'value';
        let result : any = new bare.createInstance(any,null,'test',defaultValue);
        let entry : any = new bare.createInstance(any,null,target);
        expect(entry.getValue(result),defaultValue);
    }
    test_getValue_flushResults() {
        let cachingPolicy : any = new bare.createInstance(any,null,2,2);
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null,{
            cachingPolicy : cachingPolicy});
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null,{
            cachingPolicy : cachingPolicy});
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null,{
            cachingPolicy : cachingPolicy});
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        {
            entry.setValue(descriptor1,1,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.VALID);
        }
        {
            entry.setValue(descriptor2,2,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.VALID);
            expect(entry.getState(descriptor2),CacheState.VALID);
        }
        entry.getValue(descriptor1);
        {
            entry.setValue(descriptor3,3,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.VALID);
            expect(entry.getState(descriptor2),CacheState.FLUSHED);
            expect(entry.getState(descriptor3),CacheState.VALID);
        }
    }
    test_hasErrorState_false() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        expect(entry.hasErrorState(),false);
    }
    test_hasErrorState_true() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let exception : any = new bare.createInstance(any,null,null,null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setErrorState(exception,new core.DartList.literal<any>(result));
        expect(entry.hasErrorState(),true);
    }
    test_invalidateAllInformation() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,'value',TargetedResult.EMPTY_LIST);
        entry.invalidateAllInformation();
        expect(entry.getState(result),CacheState.INVALID);
        expect(entry.getValue(result),isNull);
    }
    test_setErrorState() {
        let target : any = new lib3.TestSource();
        let result1 : any = new bare.createInstance(any,null,'res1',1);
        let result2 : any = new bare.createInstance(any,null,'res2',2);
        let result3 : any = new bare.createInstance(any,null,'res3',3);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result1,10,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,20,TargetedResult.EMPTY_LIST);
        entry.setValue(result3,30,TargetedResult.EMPTY_LIST);
        let exception : any = new bare.createInstance(any,null,null,null);
        entry.setErrorState(exception,new core.DartList.literal<any>(result1,result2));
        expect(entry.exception,exception);
        expect(entry.getState(result1),CacheState.ERROR);
        expect(entry.getState(result2),CacheState.ERROR);
        expect(entry.getState(result3),CacheState.VALID);
        expect(entry.getValue(result1),1);
        expect(entry.getValue(result2),2);
        expect(entry.getValue(result3),30);
    }
    test_setErrorState_invalidateDependent() {
        let target1 : any = new lib3.TestSource('/a.dart');
        let target2 : any = new lib3.TestSource('/b.dart');
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        this.cache.put(entry1);
        this.cache.put(entry2);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        let result4 : any = new bare.createInstance(any,null,'result4',-4);
        entry1.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry2.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target1,result1)));
        entry2.setValue(result3,333,new core.DartList.literal(new bare.createInstance(any,null,target2,result2)));
        entry2.setValue(result4,444,new core.DartList.literal());
        expect(entry1.getState(result1),CacheState.VALID);
        expect(entry2.getState(result2),CacheState.VALID);
        expect(entry2.getState(result3),CacheState.VALID);
        expect(entry2.getState(result4),CacheState.VALID);
        expect(entry1.getValue(result1),111);
        expect(entry2.getValue(result2),222);
        expect(entry2.getValue(result3),333);
        expect(entry2.getValue(result4),444);
        let exception : any = new bare.createInstance(any,null,null,null);
        entry1.setErrorState(exception,new core.DartList.literal<any>(result1));
        expect(entry1.getState(result1),CacheState.ERROR);
        expect(entry2.getState(result2),CacheState.ERROR);
        expect(entry2.getState(result3),CacheState.ERROR);
        expect(entry2.getState(result4),CacheState.VALID);
        expect(entry1.getValue(result1),-1);
        expect(entry2.getValue(result2),-2);
        expect(entry2.getValue(result3),-3);
        expect(entry2.getValue(result4),444);
        expect(entry1.exception,exception);
        expect(entry2.exception,exception);
    }
    test_setErrorState_noDescriptors() {
        let target : any = new lib3.TestSource();
        let exception : any = new bare.createInstance(any,null,null,null);
        let entry : any = new bare.createInstance(any,null,target);
        expect(() =>  {
            entry.setErrorState(exception,new core.DartList.literal<any>());
        },throwsArgumentError);
    }
    test_setErrorState_noException() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        expect(() =>  {
            entry.setErrorState(null,new core.DartList.literal<any>(result));
        },throwsArgumentError);
    }
    test_setErrorState_nullDescriptors() {
        let target : any = new lib3.TestSource();
        let exception : any = new bare.createInstance(any,null,null,null);
        let entry : any = new bare.createInstance(any,null,target);
        expect(() =>  {
            entry.setErrorState(exception,null);
        },throwsArgumentError);
    }
    test_setState_error() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,42,TargetedResult.EMPTY_LIST);
        expect(() =>  {
            entry.setState(result,CacheState.ERROR);
        },throwsArgumentError);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),42);
    }
    test_setState_flushed() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',1);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,10,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),10);
        entry.setState(result,CacheState.FLUSHED);
        expect(entry.getState(result),CacheState.FLUSHED);
        expect(entry.getValue(result),1);
    }
    test_setState_inProcess() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',1);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,10,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),10);
        entry.setState(result,CacheState.IN_PROCESS);
        expect(entry.getState(result),CacheState.IN_PROCESS);
        expect(entry.getValue(result),10);
    }
    test_setState_invalid() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',1);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,10,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),10);
        let numberOfEvents : number = 0;
        this.cache.onResultInvalidated.listen((event : any) =>  {
            numberOfEvents++;
            expect(event.entry,same(entry));
            expect(event.descriptor,same(result));
        });
        entry.setState(result,CacheState.INVALID);
        expect(entry.getState(result),CacheState.INVALID);
        expect(entry.getValue(result),1);
        expect(numberOfEvents,1);
    }
    test_setState_invalid_dependencyCycle() {
        let target1 : any = new lib3.TestSource('/a.dart');
        let target2 : any = new lib3.TestSource('/b.dart');
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        this.cache.put(entry1);
        this.cache.put(entry2);
        let result : any = new bare.createInstance(any,null,'result',-1);
        entry1.setValue(result,100,new core.DartList.literal(new bare.createInstance(any,null,target2,result)));
        entry2.setValue(result,200,new core.DartList.literal(new bare.createInstance(any,null,target1,result)));
        expect(entry1.getState(result),CacheState.VALID);
        expect(entry2.getState(result),CacheState.VALID);
        let numberOfEvents : number = 0;
        let wasEntry1 : boolean = false;
        let wasEntry2 : boolean = false;
        this.cache.onResultInvalidated.listen((event : any) =>  {
            numberOfEvents++;
            if (op(Op.EQUALS,event.entry,entry1)) wasEntry1 = true;
            if (op(Op.EQUALS,event.entry,entry2)) wasEntry2 = true;
            expect(event.descriptor,same(result));
        });
        entry1.setState(result,CacheState.INVALID);
        expect(this.cache.get(target1),isNull);
        expect(this.cache.get(target2),isNull);
        expect(numberOfEvents,2);
        expect(wasEntry1,isTrue);
        expect(wasEntry2,isTrue);
    }
    test_setState_invalid_invalidateDependent() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        let result4 : any = new bare.createInstance(any,null,'result4',-4);
        entry.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target,result1)));
        entry.setValue(result3,333,new core.DartList.literal(new bare.createInstance(any,null,target,result2)));
        entry.setValue(result4,444,new core.DartList.literal());
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getState(result3),CacheState.VALID);
        expect(entry.getState(result4),CacheState.VALID);
        expect(entry.getValue(result1),111);
        expect(entry.getValue(result2),222);
        expect(entry.getValue(result3),333);
        expect(entry.getValue(result4),444);
        entry.setState(result1,CacheState.INVALID);
        expect(entry.getState(result1),CacheState.INVALID);
        expect(entry.getState(result2),CacheState.INVALID);
        expect(entry.getState(result3),CacheState.INVALID);
        expect(entry.getState(result4),CacheState.VALID);
        expect(entry.getValue(result1),-1);
        expect(entry.getValue(result2),-2);
        expect(entry.getValue(result3),-3);
        expect(entry.getValue(result4),444);
        expect(this.cache.get(target),entry);
    }
    test_setState_invalid_keepEmpty_ifExplicitlyAdded() {
        let target : any = new lib3.TestSource('/a.dart');
        let entry : any = new bare.createInstance(any,null,target);
        entry.explicitlyAdded = true;
        this.cache.put(entry);
        let result : any = new bare.createInstance(any,null,'result1',-1);
        entry.setValue(result,111,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),111);
        entry.setState(result,CacheState.INVALID);
        expect(this.cache.get(target),isNotNull);
    }
    test_setState_invalid_removeEmptyEntry() {
        let target1 : any = new lib3.TestSource('/a.dart');
        let target2 : any = new lib3.TestSource('/b.dart');
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        this.cache.put(entry1);
        this.cache.put(entry2);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        entry1.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry2.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target1,result1)));
        entry2.setValue(result3,333,new core.DartList.literal(new bare.createInstance(any,null,target2,result2)));
        expect(entry1.getState(result1),CacheState.VALID);
        expect(entry2.getState(result2),CacheState.VALID);
        expect(entry2.getState(result3),CacheState.VALID);
        expect(entry1.getValue(result1),111);
        expect(entry2.getValue(result2),222);
        expect(entry2.getValue(result3),333);
        entry1.setState(result1,CacheState.INVALID);
        expect(this.cache.get(target1),isNull);
        expect(this.cache.get(target2),isNull);
    }
    test_setState_invalid_withDelta_keepDependency() {
        let target : any = new lib3.TestSource('/test.dart');
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        entry.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target,result1)));
        entry.setValue(result3,333,new core.DartList.literal(new bare.createInstance(any,null,target,result2)));
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getState(result3),CacheState.VALID);
        expect(entry.getResultData(result1).dependentResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result2))));
        expect(entry.getResultData(result2).dependedOnResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result1))));
        let reportedInvalidatedResults : core.DartSet<any> = new core.DartSet<any>();
        this.cache.onResultInvalidated.listen((invalidatedResult : any) =>  {
            reportedInvalidatedResults.add(new bare.createInstance(any,null,invalidatedResult.entry.target,invalidatedResult.descriptor));
        });
        entry.setState(result2,CacheState.INVALID,{
            delta : new _KeepContinueDelta(target,result2)});
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getState(result3),CacheState.INVALID);
        expect(entry.getResultData(result1).dependentResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result2))));
        expect(entry.getResultData(result2).dependedOnResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result1))));
        expect(reportedInvalidatedResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result3))));
    }
    test_setState_valid() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        expect(() =>  {
            return entry.setState(result,CacheState.VALID);
        },throwsArgumentError);
    }
    test_setValue() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let value : string = 'value';
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,value,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result),CacheState.VALID);
        expect(entry.getValue(result),value);
    }
    test_setValue_flushResults() {
        let cachingPolicy : any = new bare.createInstance(any,null,2,2);
        let descriptor1 : any = new bare.createInstance(any,null,'result1',null,{
            cachingPolicy : cachingPolicy});
        let descriptor2 : any = new bare.createInstance(any,null,'result2',null,{
            cachingPolicy : cachingPolicy});
        let descriptor3 : any = new bare.createInstance(any,null,'result3',null,{
            cachingPolicy : cachingPolicy});
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        {
            entry.setValue(descriptor1,1,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.VALID);
        }
        {
            entry.setValue(descriptor2,2,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.VALID);
            expect(entry.getState(descriptor2),CacheState.VALID);
        }
        {
            entry.setValue(descriptor3,3,TargetedResult.EMPTY_LIST);
            expect(entry.getState(descriptor1),CacheState.FLUSHED);
            expect(entry.getState(descriptor2),CacheState.VALID);
            expect(entry.getState(descriptor3),CacheState.VALID);
        }
    }
    test_setValue_flushResults_keepForPrioritySources() {
        let cachingPolicy : any = new bare.createInstance(any,null,2,2);
        var newResult : (name : string) => any = (name : string) : any =>  {
            return new bare.createInstance(any,null,name,null,{
                cachingPolicy : cachingPolicy});
        };
        let descriptor1 : any = newResult('result1');
        let descriptor2 : any = newResult('result2');
        let descriptor3 : any = newResult('result3');
        let source1 : lib3.TestSource = new lib3.TestSource('/a.dart');
        let source2 : lib3.TestSource = new lib3.TestSource('/b.dart');
        let source3 : lib3.TestSource = new lib3.TestSource('/c.dart');
        let target1 : any = new _TestAnalysisTarget({
            librarySource : source1,source : source1});
        let target2 : any = new _TestAnalysisTarget({
            librarySource : source2,source : source2});
        let target3 : any = new _TestAnalysisTarget({
            librarySource : source3,source : source3});
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        let entry3 : any = new bare.createInstance(any,null,target3);
        this.cache.put(entry1);
        this.cache.put(entry2);
        this.cache.put(entry3);
        entry1.setValue(descriptor1,1,TargetedResult.EMPTY_LIST);
        entry2.setValue(descriptor2,2,TargetedResult.EMPTY_LIST);
        expect(entry1.getState(descriptor1),CacheState.VALID);
        expect(entry2.getState(descriptor2),CacheState.VALID);
        when(this.context.prioritySources).thenReturn(new core.DartList.literal(source1));
        entry3.setValue(descriptor3,3,TargetedResult.EMPTY_LIST);
        expect(entry1.getState(descriptor1),CacheState.VALID);
        expect(entry2.getState(descriptor2),CacheState.FLUSHED);
        expect(entry3.getState(descriptor3),CacheState.VALID);
    }
    test_setValue_keepDependent() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        entry.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target,result1)));
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getValue(result1),111);
        expect(entry.getValue(result2),222);
        entry.setValue(result1,1111,TargetedResult.EMPTY_LIST);
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getValue(result1),1111);
        expect(entry.getValue(result2),222);
    }
    test_setValue_userBeforeProvider_invalidateProvider_alsoUser() {
        let target1 : any = new lib3.TestSource('/a.dart');
        let target2 : any = new lib3.TestSource('/b.dart');
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        this.cache.put(entry1);
        this.cache.put(entry2);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        entry2.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target1,result1)));
        entry1.setValue(result1,111,TargetedResult.EMPTY_LIST);
        expect(entry1.getState(result1),CacheState.VALID);
        expect(entry2.getState(result2),CacheState.VALID);
        expect(entry1.getValue(result1),111);
        expect(entry2.getValue(result2),222);
        entry1.setState(result1,CacheState.INVALID);
        expect(entry1.getState(result1),CacheState.INVALID);
        expect(entry2.getState(result2),CacheState.INVALID);
    }
    test_setValueIncremental() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        let result1 : any = new bare.createInstance(any,null,'result1',-1);
        let result2 : any = new bare.createInstance(any,null,'result2',-2);
        let result3 : any = new bare.createInstance(any,null,'result3',-3);
        entry.setValue(result1,111,TargetedResult.EMPTY_LIST);
        entry.setValue(result2,222,new core.DartList.literal(new bare.createInstance(any,null,target,result1)));
        entry.setValue(result3,333,new core.DartList.literal(new bare.createInstance(any,null,target,result2)));
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getState(result3),CacheState.VALID);
        expect(entry.getValue(result1),111);
        expect(entry.getValue(result2),222);
        expect(entry.getValue(result3),333);
        entry.setValueIncremental(result2,2222,true);
        expect(entry.getState(result1),CacheState.VALID);
        expect(entry.getState(result2),CacheState.VALID);
        expect(entry.getState(result3),CacheState.INVALID);
        expect(entry.getValue(result1),111);
        expect(entry.getValue(result2),2222);
        expect(entry.getValue(result3),-3);
        expect(entry.getResultData(result1).dependentResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result2))));
        expect(entry.getResultData(result2).dependedOnResults,unorderedEquals(new core.DartList.literal(new bare.createInstance(any,null,target,result1))));
    }
    test_toString_empty() {
        let target : any = new lib3.TestSource();
        let entry : any = new bare.createInstance(any,null,target);
        expect(entry.toString(),isNotNull);
    }
    test_toString_nonEmpty() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'test',null);
        let entry : any = new bare.createInstance(any,null,target);
        this.cache.put(entry);
        entry.setValue(result,42,TargetedResult.EMPTY_LIST);
        expect(entry.toString(),isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CacheEntryTest() {
    }
}

export namespace PackageCachePartitionTest {
    export type Constructors = CachePartitionTest.Constructors | 'PackageCachePartitionTest';
    export type Interface = Omit<PackageCachePartitionTest, Constructors>;
}
@DartClass
export class PackageCachePartitionTest extends CachePartitionTest {
    resourceProvider : any;

    rootFolder : any;

    createPartition() : any {
        this.resourceProvider = new bare.createInstance(any,null);
        this.rootFolder = this.resourceProvider.newFolder('/package/root');
        return new bare.createInstance(any,null,null,this.rootFolder);
    }
    test_contains_false() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        expect(partition.isResponsibleFor(target),isFalse);
    }
    test_contains_true() : void {
        let partition : any = new bare.createInstance(any,null,null);
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.resourceProvider,new core.DartMap.literal([
            ['root',new core.DartList.literal<any>(this.rootFolder)]]))));
        let target : any = factory.forUri("package:root/root.dart");
        expect(partition.isResponsibleFor(target),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageCachePartitionTest() {
    }
}

export namespace SdkCachePartitionTest {
    export type Constructors = CachePartitionTest.Constructors | 'SdkCachePartitionTest';
    export type Interface = Omit<SdkCachePartitionTest, Constructors>;
}
@DartClass
export class SdkCachePartitionTest extends CachePartitionTest {
    createPartition() : any {
        return new bare.createInstance(any,null,null);
    }
    test_contains_false() : void {
        let partition : any = this.createPartition();
        let target : any = new lib3.TestSource();
        expect(partition.isResponsibleFor(target),isFalse);
    }
    test_contains_true() : void {
        let partition : any = new bare.createInstance(any,null,null);
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let sdk : any = new bare.createInstance(any,null,resourceProvider,FolderBasedDartSdk.defaultSdkDirectory(resourceProvider));
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,sdk)));
        let target : any = factory.forUri("dart:core");
        expect(partition.isResponsibleFor(target),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SdkCachePartitionTest() {
    }
}

export namespace UniversalCachePartitionTest {
    export type Constructors = CachePartitionTest.Constructors | 'UniversalCachePartitionTest';
    export type Interface = Omit<UniversalCachePartitionTest, Constructors>;
}
@DartClass
export class UniversalCachePartitionTest extends CachePartitionTest {
    createPartition() : any {
        return new bare.createInstance(any,null,null);
    }
    test_contains() : void {
        let partition : any = new bare.createInstance(any,null,null);
        let source : lib3.TestSource = new lib3.TestSource();
        expect(partition.isResponsibleFor(source),isTrue);
    }
    test_dispose() {
        let context : any = new _InternalAnalysisContextMock();
        let partition1 : any = new bare.createInstance(any,null,context);
        let partition2 : any = new bare.createInstance(any,null,context);
        let cache : any = new bare.createInstance(any,null,new core.DartList.literal(partition1,partition2));
        when(context.analysisCache).thenReturn(cache);
        let descriptor1 : any = new bare.createInstance(any,null,'result1',-1);
        let descriptor2 : any = new bare.createInstance(any,null,'result2',-2);
        let target1 : any = new lib3.TestSource('1.dart');
        let target2 : any = new lib3.TestSource('2.dart');
        let result1 : any = new bare.createInstance(any,null,target1,descriptor1);
        let result2 : any = new bare.createInstance(any,null,target2,descriptor2);
        let entry1 : any = new bare.createInstance(any,null,target1);
        let entry2 : any = new bare.createInstance(any,null,target2);
        partition1.put(entry1);
        partition2.put(entry2);
        entry1.setValue(descriptor1,1,TargetedResult.EMPTY_LIST);
        entry2.setValue(descriptor2,2,new core.DartList.literal<any>(result1));
        expect(entry1.getResultData(descriptor1).dependentResults,contains(result2));
        partition2.dispose();
        expect(partition1.get(target1),same(entry1));
        expect(partition2.get(target2),isNull);
        expect(entry1.getResultData(descriptor1).dependentResults,isEmpty);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UniversalCachePartitionTest() {
    }
}

export class properties {
}
