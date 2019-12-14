/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/model_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";
import * as lib4 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisTaskTest);
        defineReflectiveTests(ResultDescriptorImplTest);
        defineReflectiveTests(SimpleResultCachingPolicyTest);
        defineReflectiveTests(TaskDescriptorImplTest);
    });
};
export namespace AnalysisTaskTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'AnalysisTaskTest';
    export type Interface = Omit<AnalysisTaskTest, Constructors>;
}
@DartClass
export class AnalysisTaskTest extends lib3.EngineTestCase {
    test_getRequiredInput_missingKey() {
        let target : any = new lib3.TestSource();
        let task : any = new lib4.TestAnalysisTask(null,target);
        task.inputs = new core.DartMap.literal([
            ['a','b']]);
        expect(() =>  {
            return task.getRequiredInput('c');
        },throwsA(new bare.createInstance(any,null)));
    }
    test_getRequiredInput_noInputs() {
        let target : any = new lib3.TestSource();
        let task : any = new lib4.TestAnalysisTask(null,target);
        expect(() =>  {
            return task.getRequiredInput('x');
        },throwsA(new bare.createInstance(any,null)));
    }
    test_getRequiredInput_valid() {
        let target : any = new lib3.TestSource();
        let task : any = new lib4.TestAnalysisTask(null,target);
        let key : string = 'a';
        let value : string = 'b';
        task.inputs = new core.DartMap.literal([
            [key,value]]);
        expect(task.getRequiredInput(key),value);
    }
    test_getRequiredSource() {
        let target : any = new lib3.TestSource();
        let task : any = new lib4.TestAnalysisTask(null,target);
        expect(task.getRequiredSource(),target);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisTaskTest() {
    }
}

export namespace ResultDescriptorImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ResultDescriptorImplTest';
    export type Interface = Omit<ResultDescriptorImplTest, Constructors>;
}
@DartClass
export class ResultDescriptorImplTest extends lib3.EngineTestCase {
    test_create_withCachingPolicy() {
        let policy : any = new bare.createInstance(any,null,128,16);
        let result : any = new bare.createInstance(any,null,'result',null,{
            cachingPolicy : policy});
        expect(result.cachingPolicy,same(policy));
    }
    test_create_withoutCachingPolicy() {
        let result : any = new bare.createInstance(any,null,'result',null);
        let cachingPolicy : any = result.cachingPolicy;
        expect(cachingPolicy,isNotNull);
        expect(cachingPolicy.maxActiveSize,-1);
        expect(cachingPolicy.maxIdleSize,-1);
    }
    test_create_withoutContribution() {
        expect(new bare.createInstance(any,null,'name',null),isNotNull);
    }
    test_inputFor() {
        let target : any = new lib3.TestSource();
        let result : any = new bare.createInstance(any,null,'result',null);
        let input : any = result.of(target);
        expect(input,isNotNull);
    }
    test_name() {
        let name : string = 'result';
        let result : any = new bare.createInstance(any,null,name,null);
        expect(result.name,name);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResultDescriptorImplTest() {
    }
}

export namespace SimpleResultCachingPolicyTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'SimpleResultCachingPolicyTest';
    export type Interface = Omit<SimpleResultCachingPolicyTest, Constructors>;
}
@DartClass
export class SimpleResultCachingPolicyTest extends lib3.EngineTestCase {
    test_create() {
        let policy : any = new bare.createInstance(any,null,256,32);
        expect(policy.maxActiveSize,256);
        expect(policy.maxIdleSize,32);
        expect(policy.measure(null),1);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleResultCachingPolicyTest() {
    }
}

export namespace TaskDescriptorImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TaskDescriptorImplTest';
    export type Interface = Omit<TaskDescriptorImplTest, Constructors>;
}
@DartClass
export class TaskDescriptorImplTest extends lib3.EngineTestCase {
    test_create_noOptionalArgs() {
        let name : string = 'name';
        let buildTask : any = (context : any,target : any) =>  {
        };
        let createTaskInputs : any = (target : any) =>  {
        };
        let results : core.DartList<any> = new core.DartList.literal<any>();
        let descriptor : any = new bare.createInstance(any,null,name,buildTask,createTaskInputs,results);
        expect(descriptor,isNotNull);
        expect(descriptor.name,name);
        expect(descriptor.buildTask,equals(buildTask));
        expect(descriptor.createTaskInputs,equals(createTaskInputs));
        expect(descriptor.suitabilityFor(null),TaskSuitability.LOWEST);
        expect(descriptor.results,results);
    }
    test_create_withIsAppropriateFor() {
        let name : string = 'name';
        let buildTask : any = (context : any,target : any) =>  {
        };
        let createTaskInputs : any = (target : any) =>  {
        };
        let results : core.DartList<any> = new core.DartList.literal<any>();
        let suitabilityFor : any = (target : any) =>  {
            return TaskSuitability.NONE;
        };
        let descriptor : any = new bare.createInstance(any,null,name,buildTask,createTaskInputs,results,{
            suitabilityFor : suitabilityFor});
        expect(descriptor,isNotNull);
        expect(descriptor.name,name);
        expect(descriptor.buildTask,equals(buildTask));
        expect(descriptor.createTaskInputs,equals(createTaskInputs));
        expect(descriptor.suitabilityFor(null),TaskSuitability.NONE);
        expect(descriptor.results,results);
    }
    test_createTask() {
        let buildTask : any = (context : any,target : any) =>  {
            return new lib4.TestAnalysisTask(context,target);
        };
        let createTaskInputs : any = (target : any) =>  {
        };
        let results : core.DartList<any> = new core.DartList.literal<any>();
        let descriptor : any = new bare.createInstance(any,null,'name',buildTask,createTaskInputs,results);
        let context : any = null;
        let target : any = new lib3.TestSource();
        let inputs : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let createTask : any = descriptor.createTask(context,target,inputs);
        expect(createTask,isNotNull);
        expect(createTask.context,context);
        expect(createTask.inputs,inputs);
        expect(createTask.target,target);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TaskDescriptorImplTest() {
    }
}

export class properties {
}
