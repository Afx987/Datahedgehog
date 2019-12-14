/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AnalysisDriver {
    export type Constructors = 'AnalysisDriver';
    export type Interface = Omit<AnalysisDriver, Constructors>;
}
@DartClass
export class AnalysisDriver {
    taskManager : any;

    workManagers : core.DartList<any>;

    context : any;

    resultComputedControllers : core.DartMap<any,async.DartStreamController<any>>;

    currentWorkOrder : WorkOrder;

    isTaskRunning : boolean;

    _onTaskStartedController : async.DartStreamController<any>;

    _onTaskCompletedController : async.DartStreamController<any>;

    constructor(taskManager : any,workManagers : core.DartList<any>,context : any) {
    }
    @defaultConstructor
    AnalysisDriver(taskManager : any,workManagers : core.DartList<any>,context : any) {
        this.resultComputedControllers = new core.DartMap.literal([
        ]);
        this.isTaskRunning = false;
        this.taskManager = taskManager;
        this.workManagers = workManagers;
        this.context = context;
        this._onTaskStartedController = new async.DartStreamController.broadcast();
        this._onTaskCompletedController = new async.DartStreamController.broadcast();
    }
    get onTaskCompleted() : async.DartStream<any> {
        return this._onTaskCompletedController.stream;
    }
    get onTaskStarted() : async.DartStream<any> {
        return this._onTaskStartedController.stream;
    }
    computeResult(target : any,result : any) : any {
        /* TODO (AssertStatementImpl) : assert (!isTaskRunning); */;
        try {
            this.isTaskRunning = true;
            let task : any;
            while (true){
                try {
                    let workOrder : WorkOrder = this.createWorkOrderForResult(target,result);
                    if (workOrder != null) {
                        while (workOrder.moveNext()){
                            task = this.performWorkItem(workOrder.current);
                        }
                    }
                    break;
                } catch (__error__) {

                    if (is(__error__,any)){
                    }
                }
            }
            return task;
        } finally {
            this.isTaskRunning = false;
        }
    }
    createNextWorkOrder() : WorkOrder {
        while (true){
            let highestPriority : any = null;
            let highestManager : any = null;
            for(let manager of this.workManagers) {
                let priority : any = manager.getNextResultPriority();
                if (op(Op.EQUALS,highestPriority,null) || op(Op.GT,highestPriority.index,priority.index)) {
                    highestPriority = priority;
                    highestManager = manager;
                }
            }
            if (op(Op.EQUALS,highestPriority,WorkOrderPriority.NONE)) {
                return null;
            }
            let request : any = highestManager.getNextResult();
            if (request != null) {
                let workOrder : WorkOrder = this.createWorkOrderForResult(request.target,request.result);
                if (workOrder != null) {
                    return workOrder;
                }
            }
        }
    }
    createWorkOrderForResult(target : any,result : any) : WorkOrder {
        let entry : any = this.context.getCacheEntry(target);
        let state : any = entry.getState(result);
        if (op(Op.EQUALS,state,CacheState.VALID) || op(Op.EQUALS,state,CacheState.ERROR) || op(Op.EQUALS,state,CacheState.IN_PROCESS)) {
            return null;
        }
        if (this.context.aboutToComputeResult(entry,result)) {
            return null;
        }
        let taskDescriptor : any = this.taskManager.findTask(target,result);
        if (op(Op.EQUALS,taskDescriptor,null)) {
            return null;
        }
        try {
            let workItem : WorkItem = new WorkItem(this.context,target,taskDescriptor,result,0,null);
            return new WorkOrder(this.taskManager,workItem);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                throw new bare.createInstance(any,null,`Could not create work order (target = ${target}; taskDescriptor = ${taskDescriptor}; result = ${result})`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
    }
    createWorkOrderForTarget(target : any,isPriority : boolean) : WorkOrder {
        for(let result of this.taskManager.generalResults) {
            let workOrder : WorkOrder = this.createWorkOrderForResult(target,result);
            if (workOrder != null) {
                return workOrder;
            }
        }
        if (isPriority) {
            for(let result of this.taskManager.priorityResults) {
                let workOrder : WorkOrder = this.createWorkOrderForResult(target,result);
                if (workOrder != null) {
                    return workOrder;
                }
            }
        }
        return null;
    }
    onResultComputed(descriptor : any) : async.DartStream<any> {
        return this.resultComputedControllers.putIfAbsent(descriptor,() =>  {
            return new async.DartStreamController.broadcast({
                sync : true});
        }).stream;
    }
    performAnalysisTask() : boolean {
        /* TODO (AssertStatementImpl) : assert (!isTaskRunning); */;
        try {
            this.isTaskRunning = true;
            if (op(Op.EQUALS,this.currentWorkOrder,null)) {
                this.currentWorkOrder = this.createNextWorkOrder();
            }else if (this.currentWorkOrder.moveNext()) {
                try {
                    this.performWorkItem(this.currentWorkOrder.current);
                } catch (__error__) {

                    if (is(__error__,any)){
                        this.reset();
                        return true;
                    }
                }
            }else {
                this.currentWorkOrder = this.createNextWorkOrder();
            }
            return this.currentWorkOrder != null;
        } finally {
            this.isTaskRunning = false;
        }
    }
    performWorkItem(item : WorkItem) : any {
        if (item.exception != null) {
            let targetEntry : any = this.context.getCacheEntry(item.target);
            targetEntry.setErrorState(item.exception,item.descriptor.results);
            return null;
        }
        let task : any = item.buildTask();
        this._onTaskStartedController.add(task);
        task.perform();
        properties.analysisDriverProcessOutputs.makeCurrentWhile(() =>  {
            let target : any = task.target;
            let entry : any = this.context.getCacheEntry(target);
            if (op(Op.EQUALS,task.caughtException,null)) {
                let dependedOn : core.DartList<any> = this.context.analysisOptions.trackCacheDependencies ? item.inputTargetedResults.toList() : new core.DartList.literal<any>();
                let outputs : core.DartMap<any,any> = task.outputs;
                let results : core.DartList<any> = task.descriptor.results;
                let resultLength : number = results.length;
                for(let i : number = 0; i < resultLength; i++){
                    let result : any = results[i];
                    entry.setValue(result,outputs.get(result),dependedOn);
                }
                outputs.forEach((descriptor : any,value : any) =>  {
                    let controller : async.DartStreamController<any> = this.resultComputedControllers.get(descriptor);
                    if (controller != null) {
                        let event : any = new bare.createInstance(any,null,this.context,target,descriptor,value,true);
                        controller.add(event);
                    }
                });
                for(let manager of this.workManagers) {
                    manager.resultsComputed(target,outputs);
                }
            }else {
                entry.setErrorState(task.caughtException,item.descriptor.results);
            }
        });
        this._onTaskCompletedController.add(task);
        return task;
    }
    reset() : void {
        this.currentWorkOrder = null;
    }
}

export namespace CycleAwareDependencyWalker {
    export type Constructors = 'CycleAwareDependencyWalker';
    export type Interface<Node> = Omit<CycleAwareDependencyWalker<Node>, Constructors>;
}
@DartClass
export class CycleAwareDependencyWalker<Node> {
    _path : core.DartList<Node>;

    _provisionalDependencies : core.DartList<core.DartList<Node>>;

    _contractedPath : core.DartList<number>;

    _currentIndices : core.DartList<number>;

    constructor(startingNode : Node) {
    }
    @defaultConstructor
    CycleAwareDependencyWalker(startingNode : Node) {
        this._path = new core.DartList.literal<Node>(startingNode);
        this._provisionalDependencies = new core.DartList.literal<core.DartList<Node>>(new core.DartList.literal<Node>());
        this._contractedPath = new core.DartList.literal<number>(0);
        this._currentIndices = new core.DartList.literal<number>(0);
    }
    @Abstract
    getNextInput(node : Node,skipInputs : core.DartList<Node>) : Node{ throw 'abstract'}
    getNextStronglyConnectedComponent() : StronglyConnectedComponent<Node> {
        while (this._currentIndices.isNotEmpty){
            let nextUnevaluatedInput : Node = this.getNextInput(this._path[this._currentIndices.last],this._provisionalDependencies[this._currentIndices.last]);
            /* TODO (AssertStatementImpl) : assert (!_provisionalDependencies[_currentIndices.last].contains(nextUnevaluatedInput)); */;
            if (nextUnevaluatedInput != null) {
                let previousIndex : number = this._path.indexOf(nextUnevaluatedInput);
                if (previousIndex != -1) {
                    while (this._contractedPath.last > previousIndex){
                        this._contractedPath.removeLast();
                    }
                    this._provisionalDependencies[this._currentIndices.last].add(nextUnevaluatedInput);
                    continue;
                }else {
                    let newIndex : number = this._path.length;
                    this._path.add(nextUnevaluatedInput);
                    this._provisionalDependencies.add(new core.DartList.literal<Node>());
                    this._contractedPath.add(newIndex);
                    this._currentIndices.add(newIndex);
                    continue;
                }
            }else {
                this._currentIndices.removeLast();
                if (this._currentIndices.isEmpty || this._currentIndices.last < this._contractedPath.last) {
                    let nodes : core.DartList<Node> = this._path.sublist(this._contractedPath.last);
                    let containsCycle : boolean = nodes.length > 1;
                    if (!containsCycle) {
                        if (this._provisionalDependencies.last.isNotEmpty) {
                            containsCycle = true;
                        }
                    }
                    this._path.length = this._contractedPath.last;
                    this._provisionalDependencies.length = this._contractedPath.last;
                    this._contractedPath.removeLast();
                    return new StronglyConnectedComponent<Node>(nodes,containsCycle);
                }else {
                    continue;
                }
            }
        }
        return null;
    }
}

export namespace ExtendedAnalysisContext {
    export type Constructors = 'ExtendedAnalysisContext';
    export type Interface = Omit<ExtendedAnalysisContext, Constructors>;
}
@DartClass
@Implements(any)
export class ExtendedAnalysisContext implements any.Interface {
    @AbstractProperty
    get explicitTargets() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get priorityTargets() : core.DartList<any>{ throw 'abstract'}
    set typeProvider(typeProvider : any){ throw 'abstract'}
    @Abstract
    getCacheEntry(target : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ExtendedAnalysisContext() {
    }
}

export namespace InfiniteTaskLoopException {
    export type Constructors = 'InfiniteTaskLoopException';
    export type Interface = Omit<InfiniteTaskLoopException, Constructors>;
}
@DartClass
export class InfiniteTaskLoopException extends any {
    cyclicPath : core.DartList<any>;

    dependencyCycle : core.DartList<WorkItem>;

    constructor(task : any,dependencyCycle : core.DartList<WorkItem>,cyclicPath? : core.DartList<any>) {
    }
    @defaultConstructor
    InfiniteTaskLoopException(task : any,dependencyCycle : core.DartList<WorkItem>,cyclicPath? : core.DartList<any>) {
        this.dependencyCycle = dependencyCycle;
        this.cyclicPath = cyclicPath;
        super.DartObject(InfiniteTaskLoopException._composeMessage(task,dependencyCycle,cyclicPath));
    }
    static _composeMessage(task : any,dependencyCycle : core.DartList<WorkItem>,cyclicPath : core.DartList<any>) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('Infinite loop while performing task ');
        buffer.write(task.descriptor.name);
        buffer.write(' for ');
        buffer.writeln(task.target);
        buffer.writeln('  Dependency Cycle:');
        for(let item of dependencyCycle) {
            buffer.write('    ');
            buffer.writeln(item);
        }
        if (cyclicPath != null) {
            buffer.writeln('  Cyclic Path:');
            for(let result of cyclicPath) {
                buffer.write('    ');
                buffer.writeln(result);
            }
        }
        return buffer.toString();
    }
}

export namespace StronglyConnectedComponent {
    export type Constructors = 'StronglyConnectedComponent';
    export type Interface<Node> = Omit<StronglyConnectedComponent<Node>, Constructors>;
}
@DartClass
export class StronglyConnectedComponent<Node> {
    nodes : core.DartList<Node>;

    containsCycle : boolean;

    constructor(nodes : core.DartList<Node>,containsCycle : boolean) {
    }
    @defaultConstructor
    StronglyConnectedComponent(nodes : core.DartList<Node>,containsCycle : boolean) {
        this.nodes = nodes;
        this.containsCycle = containsCycle;
    }
}

export namespace WorkItem {
    export type Constructors = 'WorkItem';
    export type Interface = Omit<WorkItem, Constructors>;
}
@DartClass
export class WorkItem {
    context : any;

    target : any;

    descriptor : any;

    spawningResult : any;

    level : number;

    workOrder : WorkOrder;

    builder : any;

    inputTargetedResults : core.DartHashSet<any>;

    inputs : core.DartMap<string,any>;

    exception : any;

    dependencyCycle : core.DartList<WorkItem>;

    constructor(context : any,target : any,descriptor : any,spawningResult : any,level : number,workOrder : WorkOrder) {
    }
    @defaultConstructor
    WorkItem(context : any,target : any,descriptor : any,spawningResult : any,level : number,workOrder : WorkOrder) {
        this.inputTargetedResults = new core.DartHashSet<any>();
        this.inputs = new core.DartMap.literal([
        ]);
        this.exception = null;
        this.context = context;
        this.target = target;
        this.descriptor = descriptor;
        this.spawningResult = spawningResult;
        this.level = level;
        this.workOrder = workOrder;
        let actualTarget : any = core.identical(this.target,AnalysisContextTarget.request) ? new bare.createInstance(any,null,this.context) : this.target;
        let inputDescriptors : core.DartMap<string,any> = this.descriptor.createTaskInputs(actualTarget);
        this.builder = new bare.createInstance(any,null,inputDescriptors);
        if (!this.builder.moveNext()) {
            this.builder = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return JenkinsSmiHash.hash2(this.descriptor.hashCode,this.target.hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, WorkItem)) {
            return op(Op.EQUALS,this.descriptor,other.descriptor) && op(Op.EQUALS,this.target,other.target);
        }else {
            return false;
        }
    }
    buildTask() : any {
        if (this.builder != null) {
            throw new core.StateError("some inputs have not been computed");
        }
        let task : any = this.descriptor.createTask(this.context,this.target,this.inputs);
        task.dependencyCycle = this.dependencyCycle;
        return task;
    }
    gatherInputs(taskManager : any,skipInputs : core.DartList<WorkItem>) : WorkItem {
        while (this.builder != null){
            let inputTarget : any = this.builder.currentTarget;
            let inputResult : any = this.builder.currentResult;
            if (op(Op.EQUALS,inputTarget,null) || op(Op.EQUALS,inputResult,null)) {
                try {
                    let message : string = `Invalid input descriptor (${inputTarget}, ${inputResult}) for ${this}`;
                    if (this.workOrder != null) {
                        message += '\nPath:\n' + this.workOrder.workItems.join('|\n');
                    }
                    throw new bare.createInstance(any,null,message);
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this.exception = new bare.createInstance(any,null,exception,stackTrace);
                        AnalysisEngine.instance.logger.logError(`Task failed: ${this}`,this.exception);
                    }
                }
                return null;
            }
            this.inputTargetedResults.add(new bare.createInstance(any,null,inputTarget,inputResult));
            let inputEntry : any = this.context.getCacheEntry(inputTarget);
            let inputState : any = inputEntry.getState(inputResult);
            if (op(Op.EQUALS,inputState,CacheState.ERROR)) {
                this.exception = inputEntry.exception;
                return null;
            }else if (op(Op.EQUALS,inputState,CacheState.IN_PROCESS)) {
                throw new core.UnimplementedError();
            }else if (inputState != CacheState.VALID) {
                if (this.context.aboutToComputeResult(inputEntry,inputResult)) {
                    inputState = CacheState.VALID;
                    this.builder.currentValue = inputEntry.getValue(inputResult);
                }else {
                    try {
                        let descriptor : any = taskManager.findTask(inputTarget,inputResult);
                        if (op(Op.EQUALS,descriptor,null)) {
                            throw new bare.createInstance(any,null,`Cannot find task to build ${inputResult} for ${inputTarget}`);
                        }
                        if (skipInputs.any((item : WorkItem) =>  {
                            return op(Op.EQUALS,item.target,inputTarget) && op(Op.EQUALS,item.descriptor,descriptor);
                        })) {
                            this.builder.currentValueNotAvailable();
                        }else {
                            return new WorkItem(this.context,inputTarget,descriptor,inputResult,this.level + 1,this.workOrder);
                        }
                    } catch (__error__) {

                        if (is(__error__,any)){
                            let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let exception : any = __error__;
                            this.exception = new bare.createInstance(any,null,exception,stackTrace);
                            return null;
                        }


                        {
                            let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let exception = __error__;
                            this.exception = new bare.createInstance(any,null,exception,stackTrace);
                            throw new bare.createInstance(any,null,`Cannot create work order to build ${inputResult} for ${inputTarget}`,this.exception);
                        }
                    }
                }
            }else {
                this.builder.currentValue = inputEntry.getValue(inputResult);
                if (this.builder.flushOnAccess) {
                    inputEntry.setState(inputResult,CacheState.FLUSHED);
                }
            }
            if (!this.builder.moveNext()) {
                this.inputs = this.builder.inputValue;
                this.builder = null;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Run ${this.descriptor} on ${this.target}`;
    }
}

export namespace WorkOrder {
    export type Constructors = 'WorkOrder';
    export type Interface = Omit<WorkOrder, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class WorkOrder implements core.DartIterator.Interface<WorkItem> {
    _dependencyWalker : _WorkOrderDependencyWalker;

    currentItems : core.DartList<WorkItem>;

    constructor(taskManager : any,item : WorkItem) {
    }
    @defaultConstructor
    WorkOrder(taskManager : any,item : WorkItem) {
        this._dependencyWalker = new _WorkOrderDependencyWalker(taskManager,item);
        item.workOrder = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get current() : WorkItem {
        if (this.currentItems == null) {
            return null;
        }else {
            return this.currentItems.last;
        }
    }
    get workItems() : core.DartList<WorkItem> {
        return this._dependencyWalker._path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        return properties.workOrderMoveNextPerformanceTag.makeCurrentWhile(() =>  {
            if (this.currentItems != null && this.currentItems.length > 1) {
                this.currentItems.removeLast();
                return true;
            }else {
                let nextStronglyConnectedComponent : StronglyConnectedComponent<WorkItem> = this._dependencyWalker.getNextStronglyConnectedComponent();
                if (op(Op.EQUALS,nextStronglyConnectedComponent,null)) {
                    this.currentItems = null;
                    return false;
                }
                this.currentItems = nextStronglyConnectedComponent.nodes;
                if (nextStronglyConnectedComponent.containsCycle) {
                    for(let item of this.currentItems) {
                        item.dependencyCycle = this.currentItems.toList();
                    }
                }else {
                    /* TODO (AssertStatementImpl) : assert (currentItems.length == 1); */;
                }
                return true;
            }
        });
    }
}

export namespace _WorkOrderDependencyWalker {
    export type Constructors = CycleAwareDependencyWalker.Constructors | '_WorkOrderDependencyWalker';
    export type Interface = Omit<_WorkOrderDependencyWalker, Constructors>;
}
@DartClass
export class _WorkOrderDependencyWalker extends CycleAwareDependencyWalker<WorkItem> {
    taskManager : any;

    constructor(taskManager : any,startingNode : WorkItem) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WorkOrderDependencyWalker(taskManager : any,startingNode : WorkItem) {
        super.CycleAwareDependencyWalker(startingNode);
        this.taskManager = taskManager;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNextInput(node : WorkItem,skipInputs : core.DartList<WorkItem>) : WorkItem {
        return node.gatherInputs(this.taskManager,skipInputs);
    }
}

export class properties {
    private static __$analysisDriverProcessOutputs : any;
    static get analysisDriverProcessOutputs() : any { 
        if (this.__$analysisDriverProcessOutputs===undefined) {
            this.__$analysisDriverProcessOutputs = new bare.createInstance(any,null,'AnalysisDriver.processOutputs');
        }
        return this.__$analysisDriverProcessOutputs;
    }
    static set analysisDriverProcessOutputs(__$value : any)  { 
        this.__$analysisDriverProcessOutputs = __$value;
    }

    private static __$workOrderMoveNextPerformanceTag : any;
    static get workOrderMoveNextPerformanceTag() : any { 
        if (this.__$workOrderMoveNextPerformanceTag===undefined) {
            this.__$workOrderMoveNextPerformanceTag = new bare.createInstance(any,null,'WorkOrder.moveNext');
        }
        return this.__$workOrderMoveNextPerformanceTag;
    }
    static set workOrderMoveNextPerformanceTag(__$value : any)  { 
        this.__$workOrderMoveNextPerformanceTag = __$value;
    }

}
