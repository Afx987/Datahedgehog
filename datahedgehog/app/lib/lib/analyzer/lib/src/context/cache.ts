/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/context/cache.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AnalysisCache {
    export type Constructors = 'AnalysisCache';
    export type Interface = Omit<AnalysisCache, Constructors>;
}
@DartClass
export class AnalysisCache {
    private static __$_TRACE_CHANGES : boolean;
    static get _TRACE_CHANGES() : boolean { 
        if (this.__$_TRACE_CHANGES===undefined) {
            this.__$_TRACE_CHANGES = false;
        }
        return this.__$_TRACE_CHANGES;
    }
    static set _TRACE_CHANGES(__$value : boolean)  { 
        this.__$_TRACE_CHANGES = __$value;
    }

    _partitions : core.DartList<CachePartition>;

    onResultInvalidated : ReentrantSynchronousStream<InvalidatedResult<any>>;

    onResultInvalidatedPartitionSubscriptions : core.DartList<ReentrantSynchronousStreamSubscription<any>>;

    constructor(_partitions : core.DartList<CachePartition>) {
    }
    @defaultConstructor
    AnalysisCache(_partitions : core.DartList<CachePartition>) {
        this.onResultInvalidated = new ReentrantSynchronousStream<InvalidatedResult<any>>();
        this.onResultInvalidatedPartitionSubscriptions = new core.DartList.literal<ReentrantSynchronousStreamSubscription<any>>();
        this._partitions = _partitions;
        for(let partition of this._partitions) {
            partition.containingCaches.add(this);
            let subscription : ReentrantSynchronousStreamSubscription<InvalidatedResult<any>> = partition.onResultInvalidated.listen((event : InvalidatedResult<any>) =>  {
                this.onResultInvalidated.add(event);
            });
            this.onResultInvalidatedPartitionSubscriptions.add(subscription);
        }
    }
    get sources() : core.DartIterable<any> {
        return this._partitions.map((partition : CachePartition) =>  {
            return partition.sources;
        }).expand((sources : core.DartIterable<any>) =>  {
            return sources;
        });
    }
    dispose() : void {
        for(let subscription of this.onResultInvalidatedPartitionSubscriptions) {
            subscription.cancel();
        }
        for(let partition of this._partitions) {
            partition.containingCaches.remove(this);
        }
    }
    flush(filter : <V>(target : any,result : any) => boolean) : void {
        for(let partition of this._partitions) {
            partition.flush(filter);
        }
    }
    get(target : any) : CacheEntry {
        let count : number = this._partitions.length;
        for(let i : number = 0; i < count; i++){
            let partition : CachePartition = this._partitions[i];
            if (partition.isResponsibleFor(target)) {
                return partition.get(target);
            }
        }
        return null;
    }
    getContextFor(target : any) : any {
        let count : number = this._partitions.length;
        for(let i : number = 0; i < count; i++){
            let partition : CachePartition = this._partitions[i];
            if (partition.isResponsibleFor(target)) {
                return partition.context;
            }
        }
        AnalysisEngine.instance.logger.logInformation(`Could not find context for ${target}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        return null;
    }
    getSourcesWithFullName(path : string) : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        for(let partition of this._partitions) {
            let partitionSources : core.DartList<any> = partition.getSourcesWithFullName(path);
            sources.addAll(partitionSources);
        }
        return sources;
    }
    getState(target : any,result : any) : any {
        let entry : CacheEntry = this.get(target);
        if (op(Op.EQUALS,entry,null)) {
            return CacheState.INVALID;
        }
        return entry.getState(result);
    }
    getValue(target : any,result : any) : core.DartObject {
        let entry : CacheEntry = this.get(target);
        if (op(Op.EQUALS,entry,null)) {
            return result.defaultValue;
        }
        return entry.getValue(result);
    }
    iterator(_namedArguments? : {context? : any}) : any {
        let {context} = Object.assign({
            "context" : null}, _namedArguments );
        let maps : core.DartList<core.DartMap<any,CacheEntry>> = new core.DartList.literal<core.DartMap<any,CacheEntry>>();
        for(let partition of this._partitions) {
            if (op(Op.EQUALS,context,null) || op(Op.EQUALS,partition.context,context)) {
                maps.add(partition.entryMap);
            }
        }
        return new bare.createInstance(any,null,maps);
    }
    put(entry : CacheEntry) : void {
        let target : any = entry.target;
        entry.fixExceptionState();
        let count : number = this._partitions.length;
        for(let i : number = 0; i < count; i++){
            let partition : CachePartition = this._partitions[i];
            if (partition.isResponsibleFor(target)) {
                if (AnalysisCache._TRACE_CHANGES) {
                    let oldEntry : CacheEntry = partition.get(target);
                    if (op(Op.EQUALS,oldEntry,null)) {
                        AnalysisEngine.instance.logger.logInformation(`Added a cache entry for ${target}.`);
                    }else {
                        AnalysisEngine.instance.logger.logInformation(`Modified the cache entry for ${target}.`);
                    }
                }
                partition.put(entry);
                return;
            }
        }
    }
    remove(target : any) : CacheEntry {
        let count : number = this._partitions.length;
        for(let i : number = 0; i < count; i++){
            let partition : CachePartition = this._partitions[i];
            if (partition.isResponsibleFor(target)) {
                if (AnalysisCache._TRACE_CHANGES) {
                    AnalysisEngine.instance.logger.logInformation(`Removed the cache entry for ${target}.`);
                }
                let entry : CacheEntry = partition.remove(target);
                if (entry != null) {
                    entry.dispose();
                }
                return entry;
            }
        }
        return null;
    }
    size() : number {
        let size : number = 0;
        let count : number = this._partitions.length;
        for(let i : number = 0; i < count; i++){
            size += this._partitions[i].size();
        }
        return size;
    }
}

export namespace CacheEntry {
    export type Constructors = 'CacheEntry';
    export type Interface = Omit<CacheEntry, Constructors>;
}
@DartClass
export class CacheEntry {
    private static __$_EXPLICITLY_ADDED_FLAG : number;
    static get _EXPLICITLY_ADDED_FLAG() : number { 
        if (this.__$_EXPLICITLY_ADDED_FLAG===undefined) {
            this.__$_EXPLICITLY_ADDED_FLAG = 0;
        }
        return this.__$_EXPLICITLY_ADDED_FLAG;
    }
    static set _EXPLICITLY_ADDED_FLAG(__$value : number)  { 
        this.__$_EXPLICITLY_ADDED_FLAG = __$value;
    }

    private static __$nextVisitId : number;
    static get nextVisitId() : number { 
        if (this.__$nextVisitId===undefined) {
            this.__$nextVisitId = 0;
        }
        return this.__$nextVisitId;
    }
    static set nextVisitId(__$value : number)  { 
        this.__$nextVisitId = __$value;
    }

    private static __$recomputedCounts : core.DartMap<any,number>;
    static get recomputedCounts() : core.DartMap<any,number> { 
        if (this.__$recomputedCounts===undefined) {
            this.__$recomputedCounts = new core.DartHashMap<any,number>();
        }
        return this.__$recomputedCounts;
    }
    static set recomputedCounts(__$value : core.DartMap<any,number>)  { 
        this.__$recomputedCounts = __$value;
    }

    target : any;

    _partition : CachePartition;

    modificationTime : number;

    _exception : any;

    _flags : number;

    _resultMap : core.DartMap<any,ResultData>;

    constructor(target : any) {
    }
    @defaultConstructor
    CacheEntry(target : any) {
        this.modificationTime = -1;
        this._flags = 0;
        this._resultMap = new core.DartHashMap<any,ResultData>();
        this.target = target;
    }
    get exception() : any {
        return this._exception;
    }
    get explicitlyAdded() : boolean {
        return this._getFlag(CacheEntry._EXPLICITLY_ADDED_FLAG);
    }
    set explicitlyAdded(explicitlyAdded : boolean) {
        this._setFlag(CacheEntry._EXPLICITLY_ADDED_FLAG,explicitlyAdded);
    }
    get nonInvalidResults() : core.DartList<any> {
        return this._resultMap.keys.toList();
    }
    dispose() : void {
        this._resultMap.forEach((descriptor : any,data : ResultData) =>  {
            let result : any = new bare.createInstance(any,null,this.target,descriptor);
            for(let dependedOnResult of data.dependedOnResults) {
                for(let cache of this._partition.containingCaches) {
                    let entry : CacheEntry = cache.get(dependedOnResult.target);
                    if (entry != null) {
                        let data : ResultData = entry.getResultDataOrNull(dependedOnResult.result);
                        if (data != null) {
                            data.dependentResults.remove(result);
                        }
                    }
                }
            }
        });
        this._resultMap.clear();
    }
    fixExceptionState() : void {
        if (!this.hasErrorState()) {
            this._exception = null;
        }
    }
    flush(filter : <V>(target : any,result : any) => boolean) : void {
        this._resultMap.forEach((result : any,data : ResultData) =>  {
            if (filter(this.target,result)) {
                data.flush();
            }
        });
    }
    getResultData(descriptor : any) : ResultData {
        return this._resultMap.putIfAbsent(descriptor,() =>  {
            return new ResultData(descriptor);
        });
    }
    getResultDataOrNull(descriptor : any) : ResultData {
        return this._resultMap.get(descriptor);
    }
    getState(descriptor : any) : any {
        let data : ResultData = this._resultMap.get(descriptor);
        if (op(Op.EQUALS,data,null)) {
            return CacheState.INVALID;
        }
        return data.state;
    }
    getValue(descriptor : any) : any {
        let data : ResultData = this._resultMap.get(descriptor);
        if (op(Op.EQUALS,data,null)) {
            return descriptor.defaultValue;
        }
        if (this._partition != null) {
            this._partition.resultAccessed(this.target,descriptor);
        }
        return data.value as core.DartObject;
    }
    hasErrorState() : boolean {
        for(let data of this._resultMap.values) {
            if (op(Op.EQUALS,data.state,CacheState.ERROR)) {
                return true;
            }
        }
        return false;
    }
    invalidateAllInformation() : void {
        this._resultMap.clear();
        this._exception = null;
    }
    isInvalid(descriptor : any) : boolean {
        return op(Op.EQUALS,this.getState(descriptor),CacheState.INVALID);
    }
    isValid(descriptor : any) : boolean {
        return op(Op.EQUALS,this.getState(descriptor),CacheState.VALID);
    }
    setErrorState(exception : any,descriptors : core.DartList<any>) : void {
        if (descriptors == null || descriptors.isEmpty) {
            throw new core.ArgumentError('at least one descriptor is expected');
        }
        if (op(Op.EQUALS,exception,null)) {
            throw new core.ArgumentError('an exception is expected');
        }
        this._exception = exception;
        for(let descriptor of descriptors) {
            this._setErrorState(descriptor,exception);
        }
    }
    setState(descriptor : any,state : any,_namedArguments? : {delta? : Delta}) : void {
        let {delta} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,state,CacheState.ERROR)) {
            throw new core.ArgumentError('use setErrorState() to set the state to ERROR');
        }
        if (op(Op.EQUALS,state,CacheState.VALID)) {
            throw new core.ArgumentError('use setValue() to set the state to VALID');
        }
        this._validateStateChange(descriptor,state);
        if (op(Op.EQUALS,state,CacheState.INVALID)) {
            let data : ResultData = this._resultMap.get(descriptor);
            if (data != null) {
                let canUseDelta : boolean = this._gatherResultsInvalidatedByDelta(descriptor,delta,0);
                if (!canUseDelta) {
                    delta = null;
                }
                this._invalidate(CacheEntry.nextVisitId++,descriptor,delta,0);
            }
        }else {
            let data : ResultData = this.getResultData(descriptor);
            data.state = state;
            if (state != CacheState.IN_PROCESS) {
                data.value = descriptor.defaultValue;
            }
        }
    }
    setValue(descriptor : any,value : any,dependedOn : core.DartList<any>) : void {
        this._validateStateChange(descriptor,CacheState.VALID);
        let thisResult : any = new bare.createInstance(any,null,this.target,descriptor);
        if (this._partition != null) {
            this._partition.resultStored(thisResult,value);
        }
        let data : ResultData = this.getResultData(descriptor);
        this._setDependedOnResults(data,thisResult,dependedOn);
        if (op(Op.EQUALS,data.state,CacheState.FLUSHED)) {
            let count : number = (CacheEntry.recomputedCounts.get(descriptor) || 0);
            CacheEntry.recomputedCounts.set(descriptor,count + 1);
        }
        data.state = CacheState.VALID;
        data.value = (value || descriptor.defaultValue);
    }
    setValueIncremental(descriptor : any,value : any,invalidateDependent : boolean) : void {
        let data : ResultData = this.getResultData(descriptor);
        if (op(Op.EQUALS,data.state,CacheState.VALID) || op(Op.EQUALS,data.state,CacheState.FLUSHED)) {
            data.value = value;
        }
        if (invalidateDependent) {
            this._invalidateDependentResults(CacheEntry.nextVisitId++,data,null,0);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this._writeOn(buffer);
        return buffer.toString();
    }
    _gatherResultsInvalidatedByDelta(result : any,delta : Delta,level : number) : boolean {
        if (op(Op.EQUALS,delta,null)) {
            return false;
        }
        if (!delta.shouldGatherChanges) {
            return true;
        }
        for(let i : number = 0; i < 64; i++){
            let hasVisitChanges : boolean = false;
            this._visitResults(CacheEntry.nextVisitId++,result,(target : any,data : ResultData) =>  {
                let hasDeltaChanges : boolean = delta.gatherChanges(this._partition.context,target,data.descriptor,data.value);
                if (hasDeltaChanges) {
                    hasVisitChanges = true;
                }
            });
            delta.gatherEnd();
            if (!hasVisitChanges) {
                return true;
            }
        }
        return false;
    }
    _getFlag(index : number) : boolean {
        return BooleanArray.get(this._flags,index);
    }
    _invalidate(id : number,descriptor : any,delta : Delta,level : number) : void {
        let thisData : ResultData = this._resultMap.get(descriptor);
        if (op(Op.EQUALS,thisData,null)) {
            return;
        }
        if (delta != null) {
            if (thisData.visitId == id) {
                return;
            }
            thisData.visitId = id;
        }
        let deltaResult : DeltaResult = null;
        if (delta != null) {
            deltaResult = delta.validate(this._partition.context,this.target,descriptor,thisData.value);
            if (op(Op.EQUALS,deltaResult,DeltaResult.STOP)) {
                return;
            }
        }
        if (op(Op.EQUALS,deltaResult,DeltaResult.INVALIDATE_NO_DELTA)) {
            delta = null;
        }
        if (op(Op.EQUALS,deltaResult,DeltaResult.INVALIDATE_KEEP_DEPENDENCIES)) {
            thisData.value = descriptor.defaultValue;
            thisData.state = CacheState.INVALID;
        }else if (op(Op.EQUALS,deltaResult,null) || op(Op.EQUALS,deltaResult,DeltaResult.INVALIDATE) || op(Op.EQUALS,deltaResult,DeltaResult.INVALIDATE_NO_DELTA)) {
            this._resultMap.remove(descriptor);
            {
                let thisResult : any = new bare.createInstance(any,null,this.target,descriptor);
                let caches : core.DartList<AnalysisCache> = this._partition.containingCaches;
                let cacheLength : number = caches.length;
                let results : core.DartList<any> = thisData.dependedOnResults;
                let resultLength : number = results.length;
                for(let i : number = 0; i < resultLength; i++){
                    let dependedOnResult : any = results[i];
                    for(let j : number = 0; j < cacheLength; j++){
                        let cache : AnalysisCache = caches[j];
                        let entry : CacheEntry = cache.get(dependedOnResult.target);
                        if (entry != null) {
                            let data : ResultData = entry.getResultDataOrNull(dependedOnResult.result);
                            if (data != null) {
                                data.dependentResults.remove(thisResult);
                            }
                        }
                    }
                }
            }
        }
        this._invalidateDependentResults(id,thisData,delta,level + 1);
        if (this._resultMap.isEmpty && !this.explicitlyAdded) {
            let entry : CacheEntry = this._partition.entryMap.remove(this.target);
            if (entry != null) {
                entry.dispose();
            }
            this._partition._removeIfSource(this.target);
        }
        if (deltaResult != DeltaResult.KEEP_CONTINUE) {
            this._partition.onResultInvalidated.add(new InvalidatedResult<any>(this,descriptor,thisData.value));
        }
    }
    _invalidateAll() : void {
        let results : core.DartList<any> = this._resultMap.keys.toList();
        let length : number = results.length;
        for(let i : number = 0; i < length; i++){
            let result : any = results[i];
            this._invalidate(CacheEntry.nextVisitId++,result,null,0);
        }
    }
    _invalidateDependentResults(id : number,thisData : ResultData,delta : Delta,level : number) : void {
        let caches : core.DartList<AnalysisCache> = this._partition.containingCaches;
        let cacheLength : number = caches.length;
        let dependentResults : core.DartList<any> = thisData.dependentResults.toList();
        let resultLength : number = dependentResults.length;
        for(let i : number = 0; i < resultLength; i++){
            let dependentResult : any = dependentResults[i];
            for(let j : number = 0; j < cacheLength; j++){
                let cache : AnalysisCache = caches[j];
                let entry : CacheEntry = cache.get(dependentResult.target);
                if (entry != null) {
                    entry._invalidate(id,dependentResult.result,delta,level);
                }
            }
        }
    }
    _setDependedOnResults(thisData : ResultData,thisResult : any,dependedOn : core.DartList<any>) : void {
        let caches : core.DartList<AnalysisCache> = this._partition.containingCaches;
        let cacheLength : number = caches.length;
        let oldResults : core.DartList<any> = thisData.dependedOnResults;
        let oldLength : number = oldResults.length;
        for(let i : number = 0; i < oldLength; i++){
            let dependedOnResult : any = oldResults[i];
            for(let j : number = 0; j < cacheLength; j++){
                let cache : AnalysisCache = caches[j];
                let entry : CacheEntry = cache.get(dependedOnResult.target);
                if (entry != null) {
                    let data : ResultData = entry.getResultDataOrNull(dependedOnResult.result);
                    if (data != null) {
                        data.dependentResults.remove(thisResult);
                    }
                }
            }
        }
        thisData.dependedOnResults = dependedOn;
        let newLength : number = dependedOn.length;
        for(let i : number = 0; i < newLength; i++){
            let dependedOnResult : any = dependedOn[i];
            for(let j : number = 0; j < cacheLength; j++){
                let cache : AnalysisCache = caches[j];
                let entry : CacheEntry = cache.get(dependedOnResult.target);
                if (entry != null) {
                    let data : ResultData = entry.getResultData(dependedOnResult.result);
                    data.dependentResults.add(thisResult);
                }
            }
        }
    }
    _setErrorState(descriptor : any,exception : any) : void {
        let thisData : ResultData = this.getResultData(descriptor);
        this._exception = exception;
        thisData.state = CacheState.ERROR;
        thisData.value = descriptor.defaultValue;
        let caches : core.DartList<AnalysisCache> = this._partition.containingCaches;
        let cacheLength : number = caches.length;
        thisData.dependentResults.forEach((dependentResult : any) =>  {
            for(let i : number = 0; i < cacheLength; i++){
                let cache : AnalysisCache = caches[i];
                let entry : CacheEntry = cache.get(dependentResult.target);
                if (entry != null) {
                    entry._setErrorState(dependentResult.result,exception);
                }
            }
        });
    }
    _setFlag(index : number,value : boolean) : void {
        this._flags = BooleanArray.set(this._flags,index,value);
    }
    _validateStateChange(descriptor : any,newState : any) : void {
    }
    _visitResults(id : number,descriptor : any,visitor : (target : any,data : ResultData) => void) : void {
        let thisData : ResultData = this._resultMap.get(descriptor);
        if (op(Op.EQUALS,thisData,null)) {
            return;
        }
        if (thisData.visitId == id) {
            return;
        }
        thisData.visitId = id;
        visitor(this.target,thisData);
        let caches : core.DartList<AnalysisCache> = this._partition.containingCaches;
        let cacheLength : number = caches.length;
        let dependentResults : core.DartList<any> = thisData.dependentResults.toList();
        let resultLength : number = dependentResults.length;
        for(let i : number = 0; i < resultLength; i++){
            let dependentResult : any = dependentResults[i];
            for(let j : number = 0; j < cacheLength; j++){
                let cache : AnalysisCache = caches[j];
                let entry : CacheEntry = cache.get(dependentResult.target);
                if (entry != null) {
                    entry._visitResults(id,dependentResult.result,visitor);
                }
            }
        }
    }
    _writeOn(buffer : core.DartStringBuffer) : void {
        buffer.write('time = ');
        buffer.write(this.modificationTime);
        let results : core.DartList<any> = this._resultMap.keys.toList();
        results.sort((first : any,second : any) =>  {
            return new core.DartString(first.toString()).compareTo(second.toString());
        });
        for(let result of results) {
            let data : ResultData = this._resultMap.get(result);
            buffer.write('; ');
            buffer.write(result.toString());
            buffer.write(' = ');
            buffer.write(data.state);
        }
    }
}

export namespace CacheFlushManager {
    export type Constructors = 'CacheFlushManager';
    export type Interface<T> = Omit<CacheFlushManager<T>, Constructors>;
}
@DartClass
export class CacheFlushManager<T> {
    isPriorityAnalysisTarget : (target : any) => boolean;

    policy : any;

    maxActiveSize : number;

    maxIdleSize : number;

    resultSizeMap : core.DartHashMap<any,number>;

    recentlyUsed : core.DartLinkedHashSet<any>;

    currentSize : number;

    maxSize : number;

    constructor(policy : any,isPriorityAnalysisTarget : (target : any) => boolean) {
    }
    @defaultConstructor
    CacheFlushManager(policy : any,isPriorityAnalysisTarget : (target : any) => boolean) {
        this.resultSizeMap = new core.DartHashMap<any,number>();
        this.recentlyUsed = new core.DartLinkedHashSet<any>();
        this.currentSize = 0;
        this.policy = policy;
        this.maxActiveSize = policy.maxActiveSize;
        this.maxIdleSize = policy.maxIdleSize;
        this.maxSize = policy.maxActiveSize;
        this.isPriorityAnalysisTarget = isPriorityAnalysisTarget;
    }
    flushToSize() : core.DartList<any> {
        if (this.currentSize <= this.maxSize) {
            return TargetedResult.EMPTY_LIST;
        }
        let resultsToFlush : core.DartList<any> = new core.DartList.literal<any>();
        for(let result of this.recentlyUsed) {
            if (this.isPriorityAnalysisTarget(result.target)) {
                continue;
            }
            resultsToFlush.add(result);
            let size : number = this.resultSizeMap.remove(result);
            /* TODO (AssertStatementImpl) : assert (size != null); */;
            this.currentSize -= size;
            if (this.currentSize <= this.maxSize) {
                break;
            }
        }
        this.recentlyUsed.removeAll(resultsToFlush);
        return resultsToFlush;
    }
    madeActive() : void {
        this.maxSize = this.maxActiveSize;
    }
    madeIdle() : core.DartList<any> {
        this.maxSize = this.maxIdleSize;
        return this.flushToSize();
    }
    resultAccessed(result : any) : void {
        if (this.recentlyUsed.remove(result)) {
            this.recentlyUsed.add(result);
        }
    }
    resultStored(newResult : any,newValue : T) : core.DartList<any> {
        if (!this.recentlyUsed.remove(newResult)) {
            let size : number = this.policy.measure(newValue);
            op(Op.INDEX_ASSIGN,this.resultSizeMap,newResult,size);
            this.currentSize += size;
        }
        this.recentlyUsed.add(newResult);
        return this.flushToSize();
    }
    targetRemoved(target : any) : void {
        let resultsToRemove : core.DartList<any> = new core.DartList.literal<any>();
        for(let result of this.recentlyUsed) {
            if (op(Op.EQUALS,result.target,target)) {
                resultsToRemove.add(result);
                let size : number = this.resultSizeMap.remove(result);
                /* TODO (AssertStatementImpl) : assert (size != null); */;
                this.currentSize -= size;
            }
        }
        this.recentlyUsed.removeAll(resultsToRemove);
    }
}

export namespace CachePartition {
    export type Constructors = 'CachePartition';
    export type Interface = Omit<CachePartition, Constructors>;
}
@DartClass
export class CachePartition {
    context : any;

    containingCaches : core.DartList<AnalysisCache>;

    _flushManagerMap : core.DartHashMap<any,CacheFlushManager<any>>;

    onResultInvalidated : ReentrantSynchronousStream<InvalidatedResult<any>>;

    entryMap : core.DartHashMap<any,CacheEntry>;

    sources : core.DartHashSet<any>;

    pathToSource : core.DartMap<string,core.DartList<any>>;

    constructor(context : any) {
    }
    @defaultConstructor
    CachePartition(context : any) {
        this.containingCaches = new core.DartList.literal<AnalysisCache>();
        this._flushManagerMap = new core.DartHashMap<any,CacheFlushManager<any>>();
        this.onResultInvalidated = new ReentrantSynchronousStream<InvalidatedResult<any>>();
        this.entryMap = new core.DartHashMap<any,CacheEntry>();
        this.sources = new core.DartHashSet<any>();
        this.pathToSource = new core.DartMap.literal([
        ]);
        this.context = context;
    }
    set isActive(active : boolean) {
        for(let manager of this._flushManagerMap.values) {
            if (active) {
                manager.madeActive();
            }else {
                let resultsToFlush : core.DartList<any> = manager.madeIdle();
                this._flushResults(resultsToFlush);
            }
        }
    }
    dispose() : void {
        for(let entry of this.entryMap.values) {
            entry.dispose();
        }
        this.entryMap.clear();
        this.sources.clear();
        this.pathToSource.clear();
    }
    flush(filter : <V>(target : any,result : any) => boolean) : void {
        for(let entry of this.entryMap.values) {
            entry.flush(filter);
        }
    }
    get(target : any) : CacheEntry {
        return op(Op.INDEX,this.entryMap,target);
    }
    getSourcesWithFullName(path : string) : core.DartList<any> {
        let sources : core.DartList<any> = this.pathToSource.get(path);
        return (sources || Source.EMPTY_LIST);
    }
    @Abstract
    isResponsibleFor(target : any) : boolean{ throw 'abstract'}
    iterator() : any {
        return new bare.createInstance(any,null,this.entryMap);
    }
    put(entry : CacheEntry) : void {
        let target : any = entry.target;
        if (entry._partition != null) {
            throw new core.StateError(`The entry for ${target} is already in ${entry._partition}`);
        }
        entry._partition = this;
        entry.fixExceptionState();
        op(Op.INDEX_ASSIGN,this.entryMap,target,entry);
        this._addIfSource(target);
    }
    remove(target : any) : CacheEntry {
        for(let flushManager of this._flushManagerMap.values) {
            flushManager.targetRemoved(target);
        }
        let entry : CacheEntry = this.entryMap.remove(target);
        if (entry != null) {
            entry._invalidateAll();
        }
        this._removeIfSource(target);
        return entry;
    }
    resultAccessed(target : any,descriptor : any) : void {
        let flushManager : CacheFlushManager<any> = this._getFlushManager(descriptor);
        let result : any = new bare.createInstance(any,null,target,descriptor);
        flushManager.resultAccessed(result);
    }
    resultStored(result : any,value : core.DartObject) : void {
        let flushManager : CacheFlushManager<any> = this._getFlushManager(result.result);
        let resultsToFlush : core.DartList<any> = flushManager.resultStored(result,value);
        this._flushResults(resultsToFlush);
    }
    size() : number {
        return this.entryMap.length;
    }
    _addIfSource(target : any) : void {
        if (is(target, any)) {
            this.sources.add(target);
            let fullName : string = target.fullName;
            this.pathToSource.putIfAbsent(fullName,() =>  {
                return new core.DartList.literal<any>();
            }).add(target);
        }
    }
    _flushResults(resultsToFlush : core.DartList<any>) : void {
        for(let result of resultsToFlush) {
            let entry : CacheEntry = this.get(result.target);
            if (entry != null) {
                let data : ResultData = entry._resultMap.get(result.result);
                if (data != null) {
                    data.flush();
                }
            }
        }
    }
    _getFlushManager(descriptor : any) : CacheFlushManager<any> {
        let policy : any = descriptor.cachingPolicy;
        if (core.identical(policy,DEFAULT_CACHING_POLICY) || this.context.analysisOptions.disableCacheFlushing) {
            return UnlimitedCacheFlushManager.INSTANCE;
        }
        let manager : CacheFlushManager<any> = op(Op.INDEX,this._flushManagerMap,policy);
        if (op(Op.EQUALS,manager,null)) {
            manager = new CacheFlushManager<any>(policy,this._isPriorityAnalysisTarget.bind(this));
            op(Op.INDEX_ASSIGN,this._flushManagerMap,policy,manager);
        }
        return manager;
    }
    _isPriorityAnalysisTarget(target : any) : boolean {
        let source : any = target.source;
        return source != null && this.context.prioritySources.contains(source);
    }
    _removeIfSource(target : any) : void {
        if (is(target, any)) {
            this.sources.remove(target);
            let path : string = target.fullName;
            let pathSources : core.DartList<any> = this.pathToSource.get(path);
            if (pathSources != null) {
                pathSources.remove(target);
                if (pathSources.isEmpty) {
                    this.pathToSource.remove(path);
                }
            }
        }
    }
}

export namespace Delta {
    export type Constructors = 'Delta';
    export type Interface = Omit<Delta, Constructors>;
}
@DartClass
export class Delta {
    source : any;

    constructor(source : any) {
    }
    @defaultConstructor
    Delta(source : any) {
        this.source = source;
    }
    get shouldGatherChanges() : boolean {
        return false;
    }
    gatherChanges(context : any,target : any,descriptor : any,value : core.DartObject) : boolean {
        return false;
    }
    gatherEnd() : void {
    }
    validate(context : any,target : any,descriptor : any,value : core.DartObject) : DeltaResult {
        return DeltaResult.INVALIDATE;
    }
}

export enum DeltaResult {
    INVALIDATE,
    INVALIDATE_KEEP_DEPENDENCIES,
    INVALIDATE_NO_DELTA,
    KEEP_CONTINUE,
    STOP
}

export namespace InvalidatedResult {
    export type Constructors = 'InvalidatedResult';
    export type Interface<V> = Omit<InvalidatedResult<V>, Constructors>;
}
@DartClass
export class InvalidatedResult<V> {
    entry : CacheEntry;

    descriptor : any;

    value : V;

    constructor(entry : CacheEntry,descriptor : any,value : V) {
    }
    @defaultConstructor
    InvalidatedResult(entry : CacheEntry,descriptor : any,value : V) {
        this.entry = entry;
        this.descriptor = descriptor;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.descriptor} of ${this.entry.target}`;
    }
}

export namespace ReentrantSynchronousStream {
    export type Constructors = 'ReentrantSynchronousStream';
    export type Interface<T> = Omit<ReentrantSynchronousStream<T>, Constructors>;
}
@DartClass
export class ReentrantSynchronousStream<T> {
    listeners : core.DartList<Function>;

    add(event : T) : void {
        let listeners : core.DartList<Function> = this.listeners.toList();
        for(let listener of listeners) {
            listener(event);
        }
    }
    listen(listener : <T>(event : T) => void) : ReentrantSynchronousStreamSubscription<T> {
        this.listeners.add(listener);
        return new ReentrantSynchronousStreamSubscription<T>(this,listener);
    }
    constructor() {
    }
    @defaultConstructor
    ReentrantSynchronousStream() {
        this.listeners = new core.DartList.literal<Function>();
    }
}

export namespace ReentrantSynchronousStreamSubscription {
    export type Constructors = 'ReentrantSynchronousStreamSubscription';
    export type Interface<T> = Omit<ReentrantSynchronousStreamSubscription<T>, Constructors>;
}
@DartClass
export class ReentrantSynchronousStreamSubscription<T> {
    _stream : ReentrantSynchronousStream<T>;

    _listener : Function;

    constructor(_stream : ReentrantSynchronousStream<T>,_listener : Function) {
    }
    @defaultConstructor
    ReentrantSynchronousStreamSubscription(_stream : ReentrantSynchronousStream<T>,_listener : Function) {
        this._stream = _stream;
        this._listener = _listener;
    }
    cancel() : void {
        this._stream.listeners.remove(this._listener);
    }
}

export namespace ResultData {
    export type Constructors = 'ResultData';
    export type Interface = Omit<ResultData, Constructors>;
}
@DartClass
export class ResultData {
    descriptor : any;

    state : any;

    value : core.DartObject;

    visitId : number;

    dependedOnResults : core.DartList<any>;

    dependentResults : core.DartSet<any>;

    constructor(descriptor : any) {
    }
    @defaultConstructor
    ResultData(descriptor : any) {
        this.visitId = -1;
        this.dependedOnResults = new core.DartList.literal<any>();
        this.dependentResults = new core.DartSet<any>();
        this.descriptor = descriptor;
        this.state = CacheState.INVALID;
        this.value = this.descriptor.defaultValue;
    }
    flush() : void {
        this.state = CacheState.FLUSHED;
        this.value = this.descriptor.defaultValue;
    }
}

export namespace PackageCachePartition {
    export type Constructors = CachePartition.Constructors | 'PackageCachePartition';
    export type Interface = Omit<PackageCachePartition, Constructors>;
}
@DartClass
export class PackageCachePartition extends CachePartition {
    packageRoot : any;

    constructor(context : any,packageRoot : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageCachePartition(context : any,packageRoot : any) {
        super.CachePartition(context);
        this.packageRoot = packageRoot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isResponsibleFor(target : any) : boolean {
        let source : any = target.source;
        return source != null && this.packageRoot.contains(source.fullName);
    }
}

export namespace SdkCachePartition {
    export type Constructors = CachePartition.Constructors | 'SdkCachePartition';
    export type Interface = Omit<SdkCachePartition, Constructors>;
}
@DartClass
export class SdkCachePartition extends CachePartition {
    constructor(context : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SdkCachePartition(context : any) {
        super.CachePartition(context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isResponsibleFor(target : any) : boolean {
        if (is(target, any)) {
            return true;
        }
        let source : any = target.source;
        return source != null && source.isInSystemLibrary;
    }
}

export namespace UniversalCachePartition {
    export type Constructors = CachePartition.Constructors | 'UniversalCachePartition';
    export type Interface = Omit<UniversalCachePartition, Constructors>;
}
@DartClass
export class UniversalCachePartition extends CachePartition {
    constructor(context : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UniversalCachePartition(context : any) {
        super.CachePartition(context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isResponsibleFor(target : any) : boolean {
        return true;
    }
}

export namespace UnlimitedCacheFlushManager {
    export type Constructors = CacheFlushManager.Constructors | 'UnlimitedCacheFlushManager';
    export type Interface = Omit<UnlimitedCacheFlushManager, Constructors>;
}
@DartClass
export class UnlimitedCacheFlushManager extends CacheFlushManager<any> {
    private static __$INSTANCE : CacheFlushManager<any>;
    static get INSTANCE() : CacheFlushManager<any> { 
        if (this.__$INSTANCE===undefined) {
            this.__$INSTANCE = new UnlimitedCacheFlushManager();
        }
        return this.__$INSTANCE;
    }
    static set INSTANCE(__$value : CacheFlushManager<any>)  { 
        this.__$INSTANCE = __$value;
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnlimitedCacheFlushManager() {
        super.CacheFlushManager(DEFAULT_CACHING_POLICY,(_ : any) =>  {
            return false;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultAccessed(result : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultStored(newResult : any,newValue : any) : core.DartList<any> {
        return TargetedResult.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    targetRemoved(target : any) : void {
    }
}

export class properties {
}
