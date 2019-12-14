/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";
import * as lib4 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisDriverTest);
        defineReflectiveTests(CycleAwareDependencyWalkerTest);
        defineReflectiveTests(WorkItemTest);
        defineReflectiveTests(WorkOrderTest);
    });
};
export namespace AbstractDriverTest {
    export type Constructors = 'AbstractDriverTest';
    export type Interface = Omit<AbstractDriverTest, Constructors>;
}
@DartClass
export class AbstractDriverTest {
    taskManager : any;

    workManagers : core.DartList<any>;

    context : any;

    analysisDriver : any;

    setUp() : void {
        this.context = new _InternalAnalysisContextMock();
        this.analysisDriver = new bare.createInstance(any,null,this.taskManager,this.workManagers,this.context);
        when(this.context.aboutToComputeResult(anyObject,anyObject)).thenReturn(false);
    }
    constructor() {
    }
    @defaultConstructor
    AbstractDriverTest() {
        this.taskManager = new bare.createInstance(any,null);
        this.workManagers = new core.DartList.literal<any>();
        this.context = new _InternalAnalysisContextMock();
    }
}

export namespace CycleAwareDependencyWalkerTest {
    export type Constructors = 'CycleAwareDependencyWalkerTest';
    export type Interface = Omit<CycleAwareDependencyWalkerTest, Constructors>;
}
@DartClass
export class CycleAwareDependencyWalkerTest {
    checkGraph(graph : core.DartMap<number,core.DartList<number>>,startingNode : number,expectedResults : core.DartList<any>) : void {
        let expectedResultsDisregardingOrder : core.DartList<core.DartSet<number>> = expectedResults.map((component : any) =>  {
            return component.nodes.toSet();
        }).toList();
        let expectedCycleIndicators : core.DartList<boolean> = expectedResults.map((component : any) =>  {
            return component.containsCycle;
        }).toList();
        let results : core.DartList<core.DartSet<number>> = new core.DartList.literal<core.DartSet<number>>();
        let cycleIndicators : core.DartList<boolean> = new core.DartList.literal<boolean>();
        let walker : _TestCycleAwareDependencyWalker = new _TestCycleAwareDependencyWalker(graph,startingNode);
        while (true){
            let nextStronglyConnectedComponent : any = walker.getNextStronglyConnectedComponent();
            if (op(Op.EQUALS,nextStronglyConnectedComponent,null)) {
                break;
            }
            results.add(nextStronglyConnectedComponent.nodes.toSet());
            cycleIndicators.add(nextStronglyConnectedComponent.containsCycle);
            walker.evaluatedNodes.addAll(nextStronglyConnectedComponent.nodes);
        }
        expect(results,expectedResultsDisregardingOrder);
        expect(cycleIndicators,expectedCycleIndicators);
    }
    cycle(nodes : core.DartList<number>) : any {
        return new bare.createInstance(any,null,nodes,true);
    }
    singleton(node : number) : any {
        return new bare.createInstance(any,null,new core.DartList.literal<number>(node),false);
    }
    test_complex_graph() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(2,3)],
            [2,new core.DartList.literal(3,4)],
            [3,new core.DartList.literal()],
            [4,new core.DartList.literal(3,5)],
            [5,new core.DartList.literal(2,6)],
            [6,new core.DartList.literal(3,4)]]),1,new core.DartList.literal(this.singleton(3),this.cycle(new core.DartList.literal(2,4,5,6)),this.singleton(1)));
    }
    test_cycle_depends_on_other_nodes() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(2,3)],
            [2,new core.DartList.literal(4,1)],
            [3,new core.DartList.literal()],
            [4,new core.DartList.literal()]]),1,new core.DartList.literal(this.singleton(4),this.singleton(3),this.cycle(new core.DartList.literal(1,2))));
    }
    test_initial_node_depends_on_cycle() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(2)],
            [2,new core.DartList.literal(3)],
            [3,new core.DartList.literal(2)]]),1,new core.DartList.literal(this.cycle(new core.DartList.literal(2,3)),this.singleton(1)));
    }
    test_simple_cycle() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(2)],
            [2,new core.DartList.literal(1)]]),1,new core.DartList.literal(this.cycle(new core.DartList.literal(1,2))));
    }
    test_simple_dependency_chain() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(2)],
            [2,new core.DartList.literal()]]),1,new core.DartList.literal(this.singleton(2),this.singleton(1)));
    }
    test_single_node() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal()]]),1,new core.DartList.literal(this.singleton(1)));
    }
    test_single_node_cycle() : void {
        this.checkGraph(new core.DartMap.literal([
            [1,new core.DartList.literal(1)]]),1,new core.DartList.literal(this.cycle(new core.DartList.literal(1))));
    }
    constructor() {
    }
    @defaultConstructor
    CycleAwareDependencyWalkerTest() {
    }
}

export namespace WorkOrderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'WorkOrderTest';
    export type Interface = Omit<WorkOrderTest, Constructors>;
}
@DartClass
export class WorkOrderTest extends lib3.EngineTestCase {
    test_create() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor : any = new bare.createInstance(any,null,'task',null,(_ : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(new bare.createInstance(any,null,'result',null)));
        let order : any = new bare.createInstance(any,null,manager,new bare.createInstance(any,null,null,null,descriptor,null,0,null));
        expect(order,isNotNull);
        expect(order.currentItems,isNull);
        expect(order.current,isNull);
    }
    test_moveNext() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor : any = new bare.createInstance(any,null,'task',null,(_ : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(new bare.createInstance(any,null,'result',null)));
        let workItem : any = new bare.createInstance(any,null,null,null,descriptor,null,0,null);
        let order : any = new bare.createInstance(any,null,manager,workItem);
        expect(order.moveNext(),isTrue);
        expect(order.current,workItem);
        expect(order.moveNext(),isFalse);
        expect(order.current,isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WorkOrderTest() {
    }
}

export namespace _InternalAnalysisContextMock {
    export type Constructors = '_InternalAnalysisContextMock';
    export type Interface = Omit<_InternalAnalysisContextMock, Constructors>;
}
@DartClass
@Implements(any)
export class _InternalAnalysisContextMock extends any implements any.Interface {
    analysisCache : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisOptions : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    explicitTargets : core.DartList<any>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    priorityTargets : core.DartList<any>;

    constructor() {
    }
    @defaultConstructor
    _InternalAnalysisContextMock() {
        this.analysisOptions = new bare.createInstance(any,null);
        this.explicitTargets = new core.DartList.literal<any>();
        this.priorityTargets = new core.DartList.literal<any>();
        this.analysisCache = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)));
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
}

export namespace _TestCycleAwareDependencyWalker {
    export type Constructors = '_TestCycleAwareDependencyWalker';
    export type Interface = Omit<_TestCycleAwareDependencyWalker, Constructors>;
}
@DartClass
export class _TestCycleAwareDependencyWalker extends any {
    graph : core.DartMap<number,core.DartList<number>>;

    evaluatedNodes : core.DartSet<number>;

    constructor(graph : core.DartMap<number,core.DartList<number>>,startingNode : number) {
    }
    @defaultConstructor
    _TestCycleAwareDependencyWalker(graph : core.DartMap<number,core.DartList<number>>,startingNode : number) {
        this.evaluatedNodes = new core.DartSet<number>();
        super.DartObject(startingNode);
        this.graph = graph;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNextInput(node : number,skipInputs : core.DartList<number>) : number {
        for(let dependency of this.graph.get(node)) {
            if (!skipInputs.contains(dependency) && !this.evaluatedNodes.contains(dependency)) {
                return dependency;
            }
        }
        return null;
    }
}

export namespace _WorkManagerMock {
    export type Constructors = '_WorkManagerMock';
    export type Interface = Omit<_WorkManagerMock, Constructors>;
}
@DartClass
@Implements(any)
export class _WorkManagerMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WorkManagerMock() {
    }
}

export namespace AnalysisDriverTest {
    export type Constructors = AbstractDriverTest.Constructors | 'AnalysisDriverTest';
    export type Interface = Omit<AnalysisDriverTest, Constructors>;
}
@DartClass
export class AnalysisDriverTest extends AbstractDriverTest {
    workManager1 : any;

    workManager2 : any;

    target1 : any;

    target2 : any;

    result1 : any;

    result2 : any;

    descriptor1 : any;

    descriptor2 : any;

    setUp() : void {
        super.setUp();
        when(this.workManager1.getNextResultPriority()).thenReturn(WorkOrderPriority.NONE);
        when(this.workManager2.getNextResultPriority()).thenReturn(WorkOrderPriority.NONE);
        this.workManagers.add(this.workManager1);
        this.workManagers.add(this.workManager2);
    }
    test_computeResult() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let task : lib4.TestAnalysisTask;
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return task;
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        task = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor});
        this.taskManager.addTaskDescriptor(descriptor);
        this.analysisDriver.computeResult(target,result);
        expect(this.context.getCacheEntry(target).getValue(result),1);
    }
    test_create() {
        expect(this.analysisDriver,isNotNull);
        expect(this.analysisDriver.context,this.context);
        expect(this.analysisDriver.currentWorkOrder,isNull);
        expect(this.analysisDriver.taskManager,this.taskManager);
    }
    test_createNextWorkOrder_highLow() {
        this._configureDescriptors12();
        when(this.workManager1.getNextResultPriority()).thenReturn(WorkOrderPriority.PRIORITY);
        when(this.workManager2.getNextResultPriority()).thenReturn(WorkOrderPriority.NORMAL);
        when(this.workManager1.getNextResult()).thenReturn(new bare.createInstance(any,null,this.target1,this.result1));
        let workOrder : any = this.analysisDriver.createNextWorkOrder();
        expect(workOrder,isNotNull);
        expect(workOrder.moveNext(),true);
        expect(workOrder.current.target,this.target1);
        expect(workOrder.current.descriptor,this.descriptor1);
    }
    test_createNextWorkOrder_lowHigh() {
        this._configureDescriptors12();
        when(this.workManager1.getNextResultPriority()).thenReturn(WorkOrderPriority.NORMAL);
        when(this.workManager2.getNextResultPriority()).thenReturn(WorkOrderPriority.PRIORITY);
        when(this.workManager2.getNextResult()).thenReturn(new bare.createInstance(any,null,this.target1,this.result1));
        let workOrder : any = this.analysisDriver.createNextWorkOrder();
        expect(workOrder,isNotNull);
        expect(workOrder.moveNext(),true);
        expect(workOrder.current.target,this.target1);
        expect(workOrder.current.descriptor,this.descriptor1);
    }
    test_createNextWorkOrder_none() {
        this._configureDescriptors12();
        when(this.workManager1.getNextResultPriority()).thenReturn(WorkOrderPriority.NONE);
        when(this.workManager2.getNextResultPriority()).thenReturn(WorkOrderPriority.NONE);
        expect(this.analysisDriver.createNextWorkOrder(),isNull);
    }
    test_createWorkOrderForResult_aboutToComputeResult() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        this.taskManager.addTaskDescriptor(descriptor);
        this.context.getCacheEntry(target).setState(result,CacheState.INVALID);
        {
            when(this.context.aboutToComputeResult(anyObject,result)).thenReturn(true);
            let workOrder : any = this.analysisDriver.createWorkOrderForResult(target,result);
            expect(workOrder,isNull);
        }
        {
            when(this.context.aboutToComputeResult(anyObject,result)).thenReturn(false);
            let workOrder : any = this.analysisDriver.createWorkOrderForResult(target,result);
            expect(workOrder,isNotNull);
        }
    }
    test_createWorkOrderForResult_error() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let exception : any = new bare.createInstance(any,null,null,null);
        this.context.getCacheEntry(target).setErrorState(exception,new core.DartList.literal<any>(result));
        expect(this.analysisDriver.createWorkOrderForResult(target,result),isNull);
    }
    test_createWorkOrderForResult_inProcess() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        this.context.getCacheEntry(target).setState(result,CacheState.IN_PROCESS);
        expect(this.analysisDriver.createWorkOrderForResult(target,result),isNull);
    }
    test_createWorkOrderForResult_invalid() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        this.taskManager.addTaskDescriptor(descriptor);
        this.context.getCacheEntry(target).setState(result,CacheState.INVALID);
        let workOrder : any = this.analysisDriver.createWorkOrderForResult(target,result);
        expect(workOrder,isNotNull);
    }
    test_createWorkOrderForResult_valid() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        this.context.getCacheEntry(target).setValue(result,'',TargetedResult.EMPTY_LIST);
        expect(this.analysisDriver.createWorkOrderForResult(target,result),isNull);
    }
    test_createWorkOrderForTarget_complete_generalTarget_generalResult() {
        this._createWorkOrderForTarget(true,false,false);
    }
    test_createWorkOrderForTarget_complete_generalTarget_priorityResult() {
        this._createWorkOrderForTarget(true,false,true);
    }
    test_createWorkOrderForTarget_complete_priorityTarget_generalResult() {
        this._createWorkOrderForTarget(true,true,false);
    }
    test_createWorkOrderForTarget_complete_priorityTarget_priorityResult() {
        this._createWorkOrderForTarget(true,true,true);
    }
    test_createWorkOrderForTarget_incomplete_generalTarget_generalResult() {
        this._createWorkOrderForTarget(false,false,false);
    }
    test_createWorkOrderForTarget_incomplete_generalTarget_priorityResult() {
        this._createWorkOrderForTarget(false,false,true);
    }
    test_createWorkOrderForTarget_incomplete_priorityTarget_generalResult() {
        this._createWorkOrderForTarget(false,true,false);
    }
    test_createWorkOrderForTarget_incomplete_priorityTarget_priorityResult() {
        this._createWorkOrderForTarget(false,true,true);
    }
    test_performAnalysisTask() {
        this._configureDescriptors12();
        when(this.workManager1.getNextResultPriority()).thenReturnList(new core.DartList.literal<any>(WorkOrderPriority.NORMAL,WorkOrderPriority.NONE));
        when(this.workManager1.getNextResult()).thenReturn(new bare.createInstance(any,null,this.target1,this.result1));
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.analysisDriver.performAnalysisTask(),false);
    }
    test_performAnalysisTask_infiniteLoop_handled() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',-1);
        let resultB : any = new bare.createInstance(any,null,'resultB',-2);
        let task1 : lib4.TestAnalysisTask;
        let task2 : lib4.TestAnalysisTask;
        let descriptor1 : any = new bare.createInstance(any,null,'task1',(context : any,target : any) =>  {
            return task1;
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['inputB',new bare.createInstance(any,null,target,resultB)]]);
        },new core.DartList.literal(resultA));
        let descriptor2 : any = new bare.createInstance(any,null,'task2',(context : any,target : any) =>  {
            return task2;
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['inputA',new bare.createInstance(any,null,target,resultA)]]);
        },new core.DartList.literal(resultB));
        task1 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor1,results : new core.DartList.literal(resultA),value : 10,handlesDependencyCycles : true});
        task2 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor2,results : new core.DartList.literal(resultB),value : 20,handlesDependencyCycles : true});
        this.taskManager.addTaskDescriptor(descriptor1);
        this.taskManager.addTaskDescriptor(descriptor2);
        when(this.workManager1.getNextResultPriority()).thenReturnList(new core.DartList.literal<any>(WorkOrderPriority.NORMAL,WorkOrderPriority.NONE));
        when(this.workManager1.getNextResult()).thenReturn(new bare.createInstance(any,null,target,resultB));
        while (this.analysisDriver.performAnalysisTask()){
        }
        let expectedCycle : core.DartSet<any> = new core.DartList.literal(descriptor1,descriptor2).toSet();
        expect(task1.dependencyCycle,isNotNull);
        expect(task1.dependencyCycle.map((workItem : any) =>  {
            return workItem.descriptor;
        }).toSet(),expectedCycle);
        expect(task2.dependencyCycle,isNotNull);
        expect(task2.dependencyCycle.map((workItem : any) =>  {
            return workItem.descriptor;
        }).toSet(),expectedCycle);
        let exception : any = this.context.getCacheEntry(target).exception;
        expect(exception,isNull);
        expect(this.context.getCacheEntry(target).getValue(resultA),10);
        expect(this.context.getCacheEntry(target).getValue(resultB),20);
    }
    test_performAnalysisTask_infiniteLoop_unhandled() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',-1);
        let resultB : any = new bare.createInstance(any,null,'resultB',-2);
        let task1 : lib4.TestAnalysisTask;
        let task2 : lib4.TestAnalysisTask;
        let descriptor1 : any = new bare.createInstance(any,null,'task1',(context : any,target : any) =>  {
            return task1;
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['inputB',new bare.createInstance(any,null,target,resultB)]]);
        },new core.DartList.literal(resultA));
        let descriptor2 : any = new bare.createInstance(any,null,'task2',(context : any,target : any) =>  {
            return task2;
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['inputA',new bare.createInstance(any,null,target,resultA)]]);
        },new core.DartList.literal(resultB));
        task1 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor1});
        task2 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor2});
        this.taskManager.addTaskDescriptor(descriptor1);
        this.taskManager.addTaskDescriptor(descriptor2);
        when(this.workManager1.getNextResultPriority()).thenReturnList(new core.DartList.literal<any>(WorkOrderPriority.NORMAL,WorkOrderPriority.NONE));
        when(this.workManager1.getNextResult()).thenReturn(new bare.createInstance(any,null,target,resultB));
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.analysisDriver.performAnalysisTask(),true);
        let exception : any = this.context.getCacheEntry(target).exception;
        expect(exception,isNotNull);
        expect(exception.exception,new bare.createInstance(any,null));
    }
    test_performAnalysisTask_inputsFirst() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',-1);
        let resultB : any = new bare.createInstance(any,null,'resultB',-2);
        let task1 : lib4.TestAnalysisTask;
        let task2 : lib4.TestAnalysisTask;
        let descriptor1 : any = new bare.createInstance(any,null,'task1',(context : any,target : any) =>  {
            return task1;
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(resultA));
        let descriptor2 : any = new bare.createInstance(any,null,'task2',(context : any,target : any) =>  {
            return task2;
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['inputA',new bare.createInstance(any,null,target,resultA)]]);
        },new core.DartList.literal(resultB));
        task1 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor1,results : new core.DartList.literal(resultA),value : 10});
        task2 = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor2,value : 20});
        this.taskManager.addTaskDescriptor(descriptor1);
        this.taskManager.addTaskDescriptor(descriptor2);
        when(this.workManager1.getNextResultPriority()).thenReturnList(new core.DartList.literal<any>(WorkOrderPriority.NORMAL,WorkOrderPriority.NONE));
        when(this.workManager1.getNextResult()).thenReturn(new bare.createInstance(any,null,target,resultB));
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.context.getCacheEntry(target).getValue(resultA),-1);
        expect(this.context.getCacheEntry(target).getValue(resultB),-2);
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.context.getCacheEntry(target).getValue(resultA),10);
        expect(this.context.getCacheEntry(target).getValue(resultB),-2);
        expect(this.analysisDriver.performAnalysisTask(),true);
        expect(this.context.getCacheEntry(target).getValue(resultA),10);
        expect(this.context.getCacheEntry(target).getValue(resultB),20);
        expect(this.analysisDriver.performAnalysisTask(),false);
    }
    test_performAnalysisTask_onResultComputed() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let task : lib4.TestAnalysisTask;
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return task;
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        task = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor,value : 42});
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        let streamNotified : boolean = false;
        this.analysisDriver.onResultComputed(result).listen((event : any) =>  {
            streamNotified = true;
            expect(event.context,same(this.context));
            expect(event.target,same(target));
            expect(event.descriptor,same(result));
            expect(event.value,42);
        });
        this.analysisDriver.performWorkItem(item);
        expect(streamNotified,isTrue);
    }
    test_performWorkItem_exceptionInTask() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let exception : any = new bare.createInstance(any,null,new bare.createInstance(any,null),null);
        let task : lib4.TestAnalysisTask;
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return task;
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        task = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor,exception : exception});
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        this.analysisDriver.performWorkItem(item);
        let targetEntry : any = this.context.getCacheEntry(item.target);
        expect(targetEntry.exception,exception);
        expect(targetEntry.getState(result),CacheState.ERROR);
    }
    test_performWorkItem_noException() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let task : lib4.TestAnalysisTask;
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return task;
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        task = new lib4.TestAnalysisTask(this.context,target,{
            descriptor : descriptor});
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        this.analysisDriver.performWorkItem(item);
        let targetEntry : any = this.context.getCacheEntry(item.target);
        expect(targetEntry.exception,isNull);
        expect(targetEntry.getState(result),CacheState.VALID);
    }
    test_performWorkItem_preExistingException() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        let exception : any = new bare.createInstance(any,null,new bare.createInstance(any,null),null);
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        item.exception = exception;
        this.analysisDriver.performWorkItem(item);
        let targetEntry : any = this.context.getCacheEntry(item.target);
        expect(targetEntry.exception,exception);
        expect(targetEntry.getState(result),CacheState.ERROR);
    }
    test_reset() {
        let inputResult : any = new bare.createInstance(any,null,'input',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',inputResult.of(target)]]);
        },new core.DartList.literal(new bare.createInstance(any,null,'output',null)));
        this.analysisDriver.currentWorkOrder = new bare.createInstance(any,null,this.taskManager,new bare.createInstance(any,null,null,null,descriptor,null,0,null));
        this.analysisDriver.reset();
        expect(this.analysisDriver.currentWorkOrder,isNull);
    }
    _configureDescriptors12() : void {
        this.descriptor1 = new bare.createInstance(any,null,'task1',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                descriptor : this.descriptor1});
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(this.result1));
        this.taskManager.addTaskDescriptor(this.descriptor1);
        this.descriptor2 = new bare.createInstance(any,null,'task2',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                descriptor : this.descriptor1});
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(this.result2));
        this.taskManager.addTaskDescriptor(this.descriptor2);
    }
    _createWorkOrderForTarget(complete : boolean,priorityTarget : boolean,priorityResult : boolean) {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(result));
        if (priorityResult) {
            this.taskManager.addPriorityResult(result);
        }else {
            this.taskManager.addGeneralResult(result);
        }
        this.taskManager.addTaskDescriptor(descriptor);
        if (priorityTarget) {
            this.context.priorityTargets.add(target);
        }else {
            this.context.explicitTargets.add(target);
        }
        if (complete) {
            this.context.getCacheEntry(target).setValue(result,'',TargetedResult.EMPTY_LIST);
        }else {
            this.context.getCacheEntry(target).setState(result,CacheState.INVALID);
        }
        let workOrder : any = this.analysisDriver.createWorkOrderForTarget(target,priorityTarget);
        if (complete) {
            expect(workOrder,isNull);
        }else if (priorityResult) {
            expect(workOrder,priorityTarget ? isNotNull : isNull);
        }else {
            expect(workOrder,isNotNull);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisDriverTest() {
        this.workManager1 = new _WorkManagerMock();
        this.workManager2 = new _WorkManagerMock();
        this.target1 = new lib3.TestSource('/1.dart');
        this.target2 = new lib3.TestSource('/2.dart');
        this.result1 = new bare.createInstance(any,null,'result1',-1);
        this.result2 = new bare.createInstance(any,null,'result2',-2);
    }
}

export namespace WorkItemTest {
    export type Constructors = AbstractDriverTest.Constructors | 'WorkItemTest';
    export type Interface = Omit<WorkItemTest, Constructors>;
}
@DartClass
export class WorkItemTest extends AbstractDriverTest {
    test_buildTask_complete() {
        let target : any = new lib3.TestSource();
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(new bare.createInstance(any,null,'output',null)));
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        let task : any = item.buildTask();
        expect(task,isNotNull);
    }
    test_buildTask_incomplete() {
        let target : any = new lib3.TestSource();
        let inputResult : any = new bare.createInstance(any,null,'input',null);
        let outputResults : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,'output',null));
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                results : outputResults});
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',inputResult.of(target)]]);
        },outputResults);
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        expect(() =>  {
            return item.buildTask();
        },throwsStateError);
    }
    test_create() {
        let target : any = new lib3.TestSource();
        let descriptor : any = new bare.createInstance(any,null,'task',null,(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(new bare.createInstance(any,null,'result',null)));
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        expect(item,isNotNull);
        expect(item.context,this.context);
        expect(item.descriptor,descriptor);
        expect(item.target,target);
    }
    test_gatherInputs_aboutToComputeResult_hasResult() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',null);
        let resultB : any = new bare.createInstance(any,null,'resultB',null);
        let task1 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                results : new core.DartList.literal(resultA)});
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(resultA));
        let task2 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',resultA.of(target)]]);
        },new core.DartList.literal(resultB));
        this.taskManager.addTaskDescriptor(task1);
        this.taskManager.addTaskDescriptor(task2);
        when(this.context.aboutToComputeResult(anyObject,resultA)).thenReturn(true);
        let item : any = new bare.createInstance(any,null,this.context,target,task2,null,0,null);
        let inputItem : any = item.gatherInputs(this.taskManager,new core.DartList.literal());
        expect(inputItem,isNull);
    }
    test_gatherInputs_aboutToComputeResult_noResult() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',null);
        let resultB : any = new bare.createInstance(any,null,'resultB',null);
        let task1 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                results : new core.DartList.literal(resultA)});
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(resultA));
        let task2 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',resultA.of(target)]]);
        },new core.DartList.literal(resultB));
        this.taskManager.addTaskDescriptor(task1);
        this.taskManager.addTaskDescriptor(task2);
        when(this.context.aboutToComputeResult(anyObject,resultA)).thenReturn(false);
        let item : any = new bare.createInstance(any,null,this.context,target,task2,null,0,null);
        let inputItem : any = item.gatherInputs(this.taskManager,new core.DartList.literal());
        expect(inputItem,isNotNull);
        expect(inputItem.target,target);
        expect(inputItem.descriptor,task1);
    }
    test_gatherInputs_complete() {
        let target : any = new lib3.TestSource();
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(new bare.createInstance(any,null,'output',null)));
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        let result : any = item.gatherInputs(this.taskManager,new core.DartList.literal());
        expect(result,isNull);
        expect(item.exception,isNull);
    }
    test_gatherInputs_incomplete() {
        let target : any = new lib3.TestSource();
        let resultA : any = new bare.createInstance(any,null,'resultA',null);
        let resultB : any = new bare.createInstance(any,null,'resultB',null);
        let task1 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target,{
                results : new core.DartList.literal(resultA)});
        },(target : any) =>  {
            return new core.DartMap.literal([
            ]);
        },new core.DartList.literal(resultA));
        let task2 : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',resultA.of(target)]]);
        },new core.DartList.literal(resultB));
        this.taskManager.addTaskDescriptor(task1);
        this.taskManager.addTaskDescriptor(task2);
        let item : any = new bare.createInstance(any,null,this.context,target,task2,null,0,null);
        let inputItem : any = item.gatherInputs(this.taskManager,new core.DartList.literal());
        expect(inputItem,isNotNull);
    }
    test_gatherInputs_invalid() {
        let target : any = new lib3.TestSource();
        let inputResult : any = new bare.createInstance(any,null,'input',null);
        let descriptor : any = new bare.createInstance(any,null,'task',(context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        },(target : any) =>  {
            return new core.DartMap.literal([
                ['one',inputResult.of(target)]]);
        },new core.DartList.literal(new bare.createInstance(any,null,'output',null)));
        let item : any = new bare.createInstance(any,null,this.context,target,descriptor,null,0,null);
        let result : any = item.gatherInputs(this.taskManager,new core.DartList.literal());
        expect(result,isNull);
        expect(item.exception,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WorkItemTest() {
    }
}

export class properties {
}
