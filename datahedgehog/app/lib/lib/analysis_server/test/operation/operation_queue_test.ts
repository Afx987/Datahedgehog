/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/operation/operation_queue_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ServerOperationQueueTest);
    });
};
export var mockOperation : (priority : any) => any = (priority : any) : any =>  {
    let operation : any = new _ServerOperationMock();
    when(operation.priority).thenReturn(priority);
    return operation;
};
export namespace AnalysisContextMock {
    export type Constructors = 'AnalysisContextMock';
    export type Interface = Omit<AnalysisContextMock, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisContextMock extends any implements any.Interface {
    prioritySources : core.DartList<any>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisContextMock() {
        this.prioritySources = new core.DartList.literal<any>();
    }
}

export namespace AnalysisServerMock {
    export type Constructors = 'AnalysisServerMock';
    export type Interface = Omit<AnalysisServerMock, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisServerMock extends any implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchEngine : any;

    constructor(_namedArguments? : {resourceProvider? : any,searchEngine? : any}) {
    }
    @defaultConstructor
    AnalysisServerMock(_namedArguments? : {resourceProvider? : any,searchEngine? : any}) {
        let {resourceProvider,searchEngine} = Object.assign({
        }, _namedArguments );
        this.resourceProvider = resourceProvider;
        this.searchEngine = searchEngine;
    }
}

export namespace ServerContextManagerMock {
    export type Constructors = 'ServerContextManagerMock';
    export type Interface = Omit<ServerContextManagerMock, Constructors>;
}
@DartClass
@Implements(any)
export class ServerContextManagerMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ServerContextManagerMock() {
    }
}

export namespace ServerOperationQueueTest {
    export type Constructors = 'ServerOperationQueueTest';
    export type Interface = Omit<ServerOperationQueueTest, Constructors>;
}
@DartClass
export class ServerOperationQueueTest {
    queue : any;

    test_add_withMerge() : void {
        let opA = new _MergeableOperationMock();
        let opB = new _MergeableOperationMock();
        let opC = new _MergeableOperationMock();
        when(opA.merge(opC)).thenReturn(true);
        when(opA.merge(anyObject)).thenReturn(false);
        when(opB.merge(anyObject)).thenReturn(false);
        when(opC.merge(anyObject)).thenReturn(false);
        this.queue.add(opA);
        this.queue.add(opB);
        this.queue.add(opC);
        expect(this.queue.take(),same(opA));
        expect(this.queue.take(),same(opB));
        expect(this.queue.isEmpty,isTrue);
    }
    test_clear() : void {
        let operationA = mockOperation(ServerOperationPriority.ANALYSIS);
        let operationB = mockOperation(ServerOperationPriority.ANALYSIS_CONTINUE);
        this.queue.add(operationA);
        this.queue.add(operationB);
        expect(this.queue.isEmpty,false);
        this.queue.clear();
        expect(this.queue.isEmpty,true);
    }
    test_contextRemoved() : void {
        let contextA = new AnalysisContextMock();
        let contextB = new AnalysisContextMock();
        let opA1 = new _ServerOperationMock(contextA);
        let opA2 = new _ServerOperationMock(contextA);
        let opB1 = new _ServerOperationMock(contextB);
        let opB2 = new _ServerOperationMock(contextB);
        when(opA1.priority).thenReturn(ServerOperationPriority.ANALYSIS_NOTIFICATION);
        when(opA2.priority).thenReturn(ServerOperationPriority.ANALYSIS_NOTIFICATION);
        when(opB1.priority).thenReturn(ServerOperationPriority.ANALYSIS_NOTIFICATION);
        when(opB2.priority).thenReturn(ServerOperationPriority.ANALYSIS_NOTIFICATION);
        this.queue.add(opA1);
        this.queue.add(opB1);
        this.queue.add(opA2);
        this.queue.add(opB2);
        this.queue.contextRemoved(contextA);
        expect(this.queue.take(),same(opB1));
        expect(this.queue.take(),same(opB2));
    }
    test_isEmpty_false() : void {
        let operation = mockOperation(ServerOperationPriority.ANALYSIS);
        this.queue.add(operation);
        expect(this.queue.isEmpty,isFalse);
    }
    test_isEmpty_true() : void {
        expect(this.queue.isEmpty,isTrue);
    }
    test_peek() : void {
        let operationA = mockOperation(ServerOperationPriority.ANALYSIS);
        let operationB = mockOperation(ServerOperationPriority.ANALYSIS);
        this.queue.add(operationA);
        this.queue.add(operationB);
        expect(this.queue.peek(),operationA);
        expect(this.queue.peek(),operationA);
        expect(this.queue.peek(),operationA);
    }
    test_peek_empty() : void {
        expect(this.queue.peek(),isNull);
    }
    test_reschedule() : void {
        let prioritySource = new lib3.MockSource();
        let analysisContextA = new AnalysisContextMock();
        let analysisContextB = new AnalysisContextMock();
        let operationA = new bare.createInstance(any,null,analysisContextA,false);
        let operationB = new bare.createInstance(any,null,analysisContextB,false);
        this.queue.add(operationA);
        this.queue.add(operationB);
        analysisContextB.prioritySources = new core.DartList.literal(prioritySource);
        this.queue.reschedule();
        expect(this.queue.take(),operationB);
        expect(this.queue.take(),operationA);
        expect(this.queue.take(),isNull);
    }
    test_sourceAboutToChange() : void {
        let sourceA : any = new _SourceMock();
        let sourceB : any = new _SourceMock();
        let opA1 = new _SourceSensitiveOperationMock(sourceA);
        let opA2 = new _SourceSensitiveOperationMock(sourceA);
        let opB1 = new _SourceSensitiveOperationMock(sourceB);
        let opB2 = new _SourceSensitiveOperationMock(sourceB);
        this.queue.add(opA1);
        this.queue.add(opB1);
        this.queue.add(opA2);
        this.queue.add(opB2);
        this.queue.sourceAboutToChange(sourceA);
        expect(this.queue.take(),same(opB1));
        expect(this.queue.take(),same(opB2));
    }
    test_take_continueAnalysisFirst() : void {
        let analysisContext = new AnalysisContextMock();
        let operationA = new bare.createInstance(any,null,analysisContext,false);
        let operationB = new bare.createInstance(any,null,analysisContext,true);
        this.queue.add(operationA);
        this.queue.add(operationB);
        expect(this.queue.take(),operationB);
        expect(this.queue.take(),operationA);
        expect(this.queue.take(),isNull);
    }
    test_take_empty() : void {
        expect(this.queue.take(),isNull);
    }
    test_take_priorityContextFirst() : void {
        let prioritySource = new lib3.MockSource();
        let analysisContextA = new AnalysisContextMock();
        let analysisContextB = new AnalysisContextMock();
        analysisContextB.prioritySources = new core.DartList.literal(prioritySource);
        let operationA = new bare.createInstance(any,null,analysisContextA,false);
        let operationB = new bare.createInstance(any,null,analysisContextB,false);
        this.queue.add(operationA);
        this.queue.add(operationB);
        expect(this.queue.take(),operationB);
        expect(this.queue.take(),operationA);
        expect(this.queue.take(),isNull);
    }
    test_take_useOperationPriorities() : void {
        let operationA = mockOperation(ServerOperationPriority.ANALYSIS);
        let operationB = mockOperation(ServerOperationPriority.ANALYSIS_CONTINUE);
        let operationC = mockOperation(ServerOperationPriority.PRIORITY_ANALYSIS);
        this.queue.add(operationA);
        this.queue.add(operationB);
        this.queue.add(operationC);
        expect(this.queue.take(),operationC);
        expect(this.queue.take(),operationB);
        expect(this.queue.take(),operationA);
        expect(this.queue.take(),isNull);
    }
    test_takeIf() : void {
        let operationA = mockOperation(ServerOperationPriority.ANALYSIS);
        let operationB = mockOperation(ServerOperationPriority.ANALYSIS);
        this.queue.add(operationA);
        this.queue.add(operationB);
        expect(this.queue.takeIf((_ : any) =>  {
            return false;
        }),isNull);
        expect(this.queue.takeIf((operation : any) =>  {
            return op(Op.EQUALS,operation,operationB);
        }),operationB);
        expect(this.queue.takeIf((operation : any) =>  {
            return op(Op.EQUALS,operation,operationB);
        }),isNull);
        expect(this.queue.takeIf((operation : any) =>  {
            return op(Op.EQUALS,operation,operationA);
        }),operationA);
        expect(this.queue.isEmpty,isTrue);
    }
    constructor() {
    }
    @defaultConstructor
    ServerOperationQueueTest() {
        this.queue = new bare.createInstance(any,null);
    }
}

export namespace _MergeableOperationMock {
    export type Constructors = '_MergeableOperationMock';
    export type Interface = Omit<_MergeableOperationMock, Constructors>;
}
@DartClass
@Implements(any)
export class _MergeableOperationMock extends any implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_NOTIFICATION;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MergeableOperationMock() {
    }
}

export namespace _ServerOperationMock {
    export type Constructors = '_ServerOperationMock';
    export type Interface = Omit<_ServerOperationMock, Constructors>;
}
@DartClass
@Implements(any)
export class _ServerOperationMock extends any implements any.Interface {
    context : any;

    constructor(context? : any) {
    }
    @defaultConstructor
    _ServerOperationMock(context? : any) {
        this.context = context;
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SourceMock() {
    }
}

export namespace _SourceSensitiveOperationMock {
    export type Constructors = '_SourceSensitiveOperationMock';
    export type Interface = Omit<_SourceSensitiveOperationMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceSensitiveOperationMock extends any implements any.Interface {
    source : any;

    constructor(source : any) {
    }
    @defaultConstructor
    _SourceSensitiveOperationMock(source : any) {
        this.source = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_NOTIFICATION;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldBeDiscardedOnSourceChange(source : any) : boolean {
        return op(Op.EQUALS,source,this.source);
    }
}

export class properties {
}
