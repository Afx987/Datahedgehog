/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TaskManagerTest);
    });
};
export namespace TaskManagerTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TaskManagerTest';
    export type Interface = Omit<TaskManagerTest, Constructors>;
}
@DartClass
export class TaskManagerTest extends lib3.EngineTestCase {
    private static __$result1 : any;
    static get result1() : any { 
        if (this.__$result1===undefined) {
            this.__$result1 = new bare.createInstance(any,null,'result1',null);
        }
        return this.__$result1;
    }
    static set result1(__$value : any)  { 
        this.__$result1 = __$value;
    }

    private static __$result2 : any;
    static get result2() : any { 
        if (this.__$result2===undefined) {
            this.__$result2 = new bare.createInstance(any,null,'result2',null);
        }
        return this.__$result2;
    }
    static set result2(__$value : any)  { 
        this.__$result2 = __$value;
    }

    test_addGeneralResult() {
        let manager : any = new bare.createInstance(any,null);
        manager.addGeneralResult(TaskManagerTest.result1);
        let results : core.DartSet<any> = manager.generalResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1)));
    }
    test_addPriorityResult() {
        let manager : any = new bare.createInstance(any,null);
        manager.addPriorityResult(TaskManagerTest.result1);
        let results : core.DartSet<any> = manager.priorityResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1)));
    }
    test_addTaskDescriptor() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor : any = new bare.createInstance(any,null,'task',null,null,new core.DartList.literal(TaskManagerTest.result1));
        manager.addTaskDescriptor(descriptor);
        expect(manager.taskMap.length,1);
    }
    test_constructor() {
        let manager : any = new bare.createInstance(any,null);
        expect(manager,isNotNull);
        expect(manager.generalResults,isEmpty);
        expect(manager.priorityResults,isEmpty);
    }
    test_findTask_defined() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor : any = new bare.createInstance(any,null,'task',null,null,new core.DartList.literal(TaskManagerTest.result1));
        manager.addTaskDescriptor(descriptor);
        let target : any = new lib3.TestSource();
        expect(manager.findTask(target,TaskManagerTest.result1),descriptor);
    }
    test_findTask_empty() {
        let manager : any = new bare.createInstance(any,null);
        let target : any = new lib3.TestSource();
        expect(() =>  {
            return manager.findTask(target,TaskManagerTest.result1);
        },throwsA(new bare.createInstance(any,null)));
    }
    test_findTask_multiple() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor1 : any = new bare.createInstance(any,null,'task1',null,null,new core.DartList.literal(TaskManagerTest.result1));
        manager.addTaskDescriptor(descriptor1);
        let descriptor2 : any = new bare.createInstance(any,null,'task2',null,null,new core.DartList.literal(TaskManagerTest.result1));
        manager.addTaskDescriptor(descriptor2);
        let descriptor3 : any = new bare.createInstance(any,null,'task3',null,null,new core.DartList.literal(TaskManagerTest.result2));
        manager.addTaskDescriptor(descriptor3);
        let target : any = new lib3.TestSource();
        let task : any = manager.findTask(target,TaskManagerTest.result1);
        expect(op(Op.EQUALS,task,descriptor1) || op(Op.EQUALS,task,descriptor2),true);
    }
    test_findTask_undefined() {
        let manager : any = new bare.createInstance(any,null);
        let descriptor : any = new bare.createInstance(any,null,'task',null,null,new core.DartList.literal(TaskManagerTest.result1));
        manager.addTaskDescriptor(descriptor);
        let target : any = new lib3.TestSource();
        expect(() =>  {
            return manager.findTask(target,TaskManagerTest.result2);
        },throwsA(new bare.createInstance(any,null)));
    }
    test_removeGeneralResult_absent() {
        let manager : any = new bare.createInstance(any,null);
        manager.addGeneralResult(TaskManagerTest.result1);
        let results : core.DartSet<any> = manager.generalResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1)));
    }
    test_removeGeneralResult_present() {
        let manager : any = new bare.createInstance(any,null);
        manager.addGeneralResult(TaskManagerTest.result1);
        manager.addGeneralResult(TaskManagerTest.result2);
        let results : core.DartSet<any> = manager.generalResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1,TaskManagerTest.result2)));
        manager.removeGeneralResult(TaskManagerTest.result1);
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result2)));
    }
    test_removePriorityResult_absent() {
        let manager : any = new bare.createInstance(any,null);
        manager.addPriorityResult(TaskManagerTest.result1);
        manager.removePriorityResult(TaskManagerTest.result2);
        let results : core.DartSet<any> = manager.priorityResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1)));
    }
    test_removePriorityResult_present() {
        let manager : any = new bare.createInstance(any,null);
        manager.addPriorityResult(TaskManagerTest.result1);
        manager.addPriorityResult(TaskManagerTest.result2);
        let results : core.DartSet<any> = manager.priorityResults;
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result1,TaskManagerTest.result2)));
        manager.removePriorityResult(TaskManagerTest.result1);
        expect(results,unorderedEquals(new core.DartList.literal(TaskManagerTest.result2)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TaskManagerTest() {
    }
}

export class properties {
}
