/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/memory_use.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AstNodeCounter {
    export type Constructors = 'AstNodeCounter';
    export type Interface = Omit<AstNodeCounter, Constructors>;
}
@DartClass
export class AstNodeCounter extends any {
    nodeCounts : core.DartMap<core.Type,number>;

    constructor(nodeCounts : core.DartMap<core.Type,number>) {
    }
    @defaultConstructor
    AstNodeCounter(nodeCounts : core.DartMap<core.Type,number>) {
        this.nodeCounts = nodeCounts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
        let type : core.Type = node.runtimeType;
        let count : number = (this.nodeCounts.get(type) || 0);
        this.nodeCounts.set(type,count + 1);
        super.visitNode(node);
    }
}

export namespace ElementCounter {
    export type Constructors = 'ElementCounter';
    export type Interface = Omit<ElementCounter, Constructors>;
}
@DartClass
export class ElementCounter extends any {
    elementCounts : core.DartMap<core.Type,number>;

    nodeCounts : core.DartMap<core.Type,number>;

    constructor(elementCounts : core.DartMap<core.Type,number>,nodeCounts : core.DartMap<core.Type,number>) {
    }
    @defaultConstructor
    ElementCounter(elementCounts : core.DartMap<core.Type,number>,nodeCounts : core.DartMap<core.Type,number>) {
        this.elementCounts = elementCounts;
        this.nodeCounts = nodeCounts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorElement(element : any) {
        if (is(element, any)) {
            let initializers : core.DartList<any> = element.constantInitializers;
            if (initializers != null) {
                initializers.forEach((initializer : any) =>  {
                    this._countNodes(initializer);
                });
            }
        }
        this.visitElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) {
        let type : core.Type = element.runtimeType;
        let count : number = (this.elementCounts.get(type) || 0);
        this.elementCounts.set(type,count + 1);
        element.metadata.forEach((annotation : any) =>  {
            if (is(annotation, any)) {
                this._countNodes(annotation.annotationAst);
            }
        });
        super.visitElement(element);
    }
    visitFieldElement(element : any) {
        if (is(element, any)) {
            this._countInitializer(element as any);
        }
        this.visitElement(element);
    }
    visitLocalVariableElement(element : any) {
        if (is(element, any)) {
            this._countInitializer(element as any);
        }
        this.visitElement(element);
    }
    visitParameterElement(element : any) {
        if (is(element, any)) {
            this._countInitializer(element as any);
        }
        this.visitElement(element);
    }
    visitTopLevelVariableElement(element : any) {
        if (is(element, any)) {
            this._countInitializer(element as any);
        }
        this.visitElement(element);
    }
    _countInitializer(element : any) : void {
        this._countNodes(element.constantInitializer);
    }
    _countNodes(node : any) : void {
        if (node != null) {
            node.accept(new AstNodeCounter(this.nodeCounts));
        }
    }
}

export namespace InfiniteSet {
    export type Constructors = 'InfiniteSet';
    export type Interface = Omit<InfiniteSet, Constructors>;
}
@DartClass
@Implements(core.DartSet)
export class InfiniteSet implements core.DartSet.Interface<any> {
    private static __$instance : InfiniteSet;
    static get instance() : InfiniteSet { 
        if (this.__$instance===undefined) {
            this.__$instance = new InfiniteSet();
        }
        return this.__$instance;
    }
    static set instance(__$value : InfiniteSet)  { 
        this.__$instance = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return -1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) : any {
        throw new core.UnsupportedError('Do not use instances of InfiniteSet');
    }
    constructor() {
    }
    @defaultConstructor
    InfiniteSet() {
    }
}

export namespace MemoryUseData {
    export type Constructors = 'MemoryUseData';
    export type Interface = Omit<MemoryUseData, Constructors>;
}
@DartClass
export class MemoryUseData {
    private static __$maxInstanceSetSize : number;
    static get maxInstanceSetSize() : number { 
        if (this.__$maxInstanceSetSize===undefined) {
            this.__$maxInstanceSetSize = 1000000;
        }
        return this.__$maxInstanceSetSize;
    }

    instances : core.DartMap<core.Type,core.DartSet<any>>;

    ownerMap : core.DartMap<core.Type,core.DartSet<core.Type>>;

    uniqueLSUs : core.DartSet<any>;

    uniqueTargetedResults : core.DartSet<any>;

    mismatchedTargets : core.DartSet<any>;

    directNodeCounts : core.DartMap<core.Type,number>;

    indirectNodeCounts : core.DartMap<core.Type,number>;

    elementCounts : core.DartMap<core.Type,number>;

    constructor() {
    }
    @defaultConstructor
    MemoryUseData() {
        this.instances = new core.DartHashMap<core.Type,core.DartSet<any>>();
        this.ownerMap = new core.DartHashMap<core.Type,core.DartSet<core.Type>>();
        this.uniqueLSUs = new core.DartHashSet<any>();
        this.uniqueTargetedResults = new core.DartHashSet<any>();
        this.mismatchedTargets = new core.DartHashSet<any>();
        this.directNodeCounts = new core.DartHashMap<core.Type,number>();
        this.indirectNodeCounts = new core.DartHashMap<core.Type,number>();
        this.elementCounts = new core.DartHashMap<core.Type,number>();
    }
    processAnalysisServer(server : any) : void {
        this._recordInstance(server,null);
        let contexts : core.DartIterable<any> = server.analysisContexts;
        for(let context of contexts) {
            this._processAnalysisContext(context,server);
        }
        let manager : any = server.sdkManager;
        let descriptors : core.DartList<any> = manager.sdkDescriptors;
        for(let descriptor of descriptors) {
            let sdk : any = manager.getSdk(descriptor,() =>  {
                return null;
            });
            if (sdk != null) {
                this._processAnalysisContext(sdk.context,manager);
            }
        }
    }
    _processAnalysisContext(context : any,owner : core.DartObject) : void {
        this._recordInstance(context,owner);
        this._recordInstance(context.analysisCache,context);
        let partition : any = context.privateAnalysisCachePartition;
        let map : core.DartMap<any,any> = partition.entryMap;
        map.forEach((target : any,entry : any) =>  {
            this._processAnalysisTarget(target,partition);
            this._processCacheEntry(entry,partition);
            if (!core.identical(entry.target,target)) {
                this.mismatchedTargets.add(target);
            }
        });
    }
    _processAnalysisTarget(target : any,owner : core.DartObject) : void {
        this._recordInstance(target,owner);
    }
    _processCacheEntry(entry : any,owner : core.DartObject) : void {
        this._recordInstance(entry,owner);
        let descriptors : core.DartList<any> = entry.nonInvalidResults;
        for(let descriptor of descriptors) {
            this._recordInstance(descriptor,entry);
            this._processResultData(entry.getResultDataOrNull(descriptor),entry);
        }
    }
    _processResultData(resultData : any,owner : core.DartObject) : void {
        this._recordInstance(resultData,owner);
        if (resultData != null) {
            this._recordInstance(resultData.state,resultData);
            this._recordInstance(resultData.value,resultData,{
                onFirstOccurrence : (object : core.DartObject) =>  {
                    if (is(object, any)) {
                        object.accept(new AstNodeCounter(this.directNodeCounts));
                    }else if (is(object, any)) {
                        object.accept(new ElementCounter(this.elementCounts,this.indirectNodeCounts));
                    }
                }});
            resultData.dependedOnResults.forEach((result : any) =>  {
                return this._processTargetedResult(result,resultData);
            });
            resultData.dependentResults.forEach((result : any) =>  {
                return this._processTargetedResult(result,resultData);
            });
        }
    }
    _processTargetedResult(result : any,owner : core.DartObject) : void {
        this._recordInstance(result,owner);
        this.uniqueTargetedResults.add(result);
        this._recordInstance(result.target,result);
        this._recordInstance(result.result,result);
    }
    _recordInstance(instance : core.DartObject,owner : core.DartObject,_namedArguments? : {onFirstOccurrence? : (object : core.DartObject) => void}) : void {
        let {onFirstOccurrence} = Object.assign({
        }, _namedArguments );
        let type : core.Type = instance.runtimeType;
        let instanceSet : core.DartSet<any> = this.instances.putIfAbsent(type,() =>  {
            return new core.DartHashSet.identity();
        });
        if (instanceSet != InfiniteSet.instance) {
            if (instanceSet.add(instance) && onFirstOccurrence != null) {
                onFirstOccurrence(instance);
            }
            if (instanceSet.length >= MemoryUseData.maxInstanceSetSize) {
                this.instances.set(type,InfiniteSet.instance);
            }
        }
        this.ownerMap.putIfAbsent(instance.runtimeType,() =>  {
            return new core.DartHashSet<core.Type>();
        }).add(owner.runtimeType);
        if (is(instance, any)) {
            this.uniqueLSUs.add(instance);
        }
    }
}

export class properties {
}
