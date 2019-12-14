/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/general_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetContentTaskTest);
    });
};
export namespace GetContentTaskTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'GetContentTaskTest';
    export type Interface = Omit<GetContentTaskTest, Constructors>;
}
@DartClass
export class GetContentTaskTest extends lib3.EngineTestCase {
    test_buildInputs() {
        let target : any = new lib3.TestSource();
        let inputs : core.DartMap<string,any> = GetContentTask.buildInputs(target);
        expect(inputs,isEmpty);
    }
    test_constructor() {
        let context : any = new _MockContext();
        let target : any = new lib3.TestSource();
        let task : any = new bare.createInstance(any,null,context,target);
        expect(task,isNotNull);
        expect(task.context,context);
        expect(task.target,target);
    }
    test_createTask() {
        let context : any = new _MockContext();
        let target : any = new lib3.TestSource();
        let task : any = GetContentTask.createTask(context,target);
        expect(task,isNotNull);
        expect(task.context,context);
        expect(task.target,target);
    }
    test_descriptor() {
        let context : any = new _MockContext();
        let target : any = new lib3.TestSource();
        let task : any = new bare.createInstance(any,null,context,target);
        expect(task.descriptor,GetContentTask.DESCRIPTOR);
    }
    test_perform() {
        let context : any = new _MockContext();
        let target : any = new lib3.TestSource();
        let task : any = new bare.createInstance(any,null,context,target);
        when(context.getContents(target)).thenReturn(new bare.createInstance(any,null,42,'foo'));
        task.perform();
        expect(task.caughtException,isNull);
        expect(task.outputs,hasLength(2));
        expect(op(Op.INDEX,task.outputs,CONTENT),'foo');
        expect(op(Op.INDEX,task.outputs,MODIFICATION_TIME),42);
    }
    test_perform_exception() : void {
        let context : any = new _MockContext();
        let target : any = new lib3.TestSource();
        let task : any = new bare.createInstance(any,null,context,target);
        when(context.getContents(target)).thenThrow('My exception!');
        task.perform();
        expect(task.caughtException,isNull);
        expect(task.outputs,hasLength(2));
        expect(op(Op.INDEX,task.outputs,CONTENT),'');
        expect(op(Op.INDEX,task.outputs,MODIFICATION_TIME),-1);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetContentTaskTest() {
    }
}

export namespace _MockContext {
    export type Constructors = '_MockContext';
    export type Interface = Omit<_MockContext, Constructors>;
}
@DartClass
@Implements(any)
export class _MockContext extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MockContext() {
    }
}

export class properties {
}
