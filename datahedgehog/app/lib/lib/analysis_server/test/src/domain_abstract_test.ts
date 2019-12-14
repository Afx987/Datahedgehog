/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/domain_abstract_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AbstractRequestHandlerTest);
    });
};
export namespace AbstractRequestHandlerTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AbstractRequestHandlerTest';
    export type Interface = Omit<AbstractRequestHandlerTest, Constructors>;
}
@DartClass
export class AbstractRequestHandlerTest extends lib3.AbstractAnalysisTest {
    test_waitForResponses_empty_noTimeout() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let handler : any = new TestAbstractRequestHandler(this.server);
            let futures : core.DartMap<any,async.Future<any>> = new core.DartMap.literal([
            ]);
            let responses : core.DartList<any> = await handler.waitForResponses(futures);
            expect(responses,isEmpty);
        } )());
    }

    test_waitForResponses_empty_timeout() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let handler : any = new TestAbstractRequestHandler(this.server);
            let futures : core.DartMap<any,async.Future<any>> = new core.DartMap.literal([
            ]);
            let responses : core.DartList<any> = await handler.waitForResponses(futures,{
                timeout : 250});
            expect(responses,isEmpty);
        } )());
    }

    test_waitForResponses_nonEmpty_noTimeout_immediate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let handler : any = new TestAbstractRequestHandler(this.server);
            let plugin1 : any = new bare.createInstance(any,null,'p1','','',null,null);
            let plugin2 : any = new bare.createInstance(any,null,'p2','','',null,null);
            let response1 : any = new bare.createInstance(any,null,'1',1);
            let response2 : any = new bare.createInstance(any,null,'2',2);
            let futures : core.DartMap<any,async.Future<any>> = new core.DartMap.literal([
                [plugin1,new async.Future.value(response1)],
                [plugin2,new async.Future.value(response2)]]);
            let responses : core.DartList<any> = await handler.waitForResponses(futures);
            expect(responses,unorderedEquals(new core.DartList.literal(response1,response2)));
        } )());
    }

    test_waitForResponses_nonEmpty_noTimeout_withError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let handler : any = new TestAbstractRequestHandler(this.server);
            let plugin1 : any = new bare.createInstance(any,null,'p1','','',null,null);
            let plugin2 : any = new bare.createInstance(any,null,'p2','','',null,null);
            let response1 : any = new bare.createInstance(any,null,'1',1);
            let response2 : any = new bare.createInstance(any,null,'2',2,{
                error : new bare.createInstance(any,null,lib4.RequestErrorCode.PLUGIN_ERROR,'message')});
            let futures : core.DartMap<any,async.Future<any>> = new core.DartMap.literal([
                [plugin1,new async.Future.value(response1)],
                [plugin2,new async.Future.value(response2)]]);
            let responses : core.DartList<any> = await handler.waitForResponses(futures);
            expect(responses,unorderedEquals(new core.DartList.literal(response1)));
        } )());
    }

    test_waitForResponses_nonEmpty_timeout_someDelayed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let handler : any = new TestAbstractRequestHandler(this.server);
            let plugin1 : any = new bare.createInstance(any,null,'p1','','',null,null);
            let plugin2 : any = new bare.createInstance(any,null,'p2','','',null,null);
            let plugin3 : any = new bare.createInstance(any,null,'p3','','',null,null);
            let response1 : any = new bare.createInstance(any,null,'1',1);
            let response2 : any = new bare.createInstance(any,null,'2',2);
            let response3 : any = new bare.createInstance(any,null,'3',3);
            let futures : core.DartMap<any,async.Future<any>> = new core.DartMap.literal([
                [plugin1,new async.Future.delayed(new core.DartDuration({
                    milliseconds : 500}),() =>  {
                    return response1;
                })],
                [plugin2,new async.Future.value(response2)],
                [plugin3,new async.Future.delayed(new core.DartDuration({
                    milliseconds : 500}),() =>  {
                    return response3;
                })]]);
            let responses : core.DartList<any> = await handler.waitForResponses(futures,{
                timeout : 50});
            expect(responses,unorderedEquals(new core.DartList.literal(response2)));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractRequestHandlerTest() {
    }
}

export namespace TestAbstractRequestHandler {
    export type Constructors = 'TestAbstractRequestHandler';
    export type Interface = Omit<TestAbstractRequestHandler, Constructors>;
}
@DartClass
export class TestAbstractRequestHandler extends any {
    constructor(server : any) {
    }
    @defaultConstructor
    TestAbstractRequestHandler(server : any) {
        super.DartObject(server);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        fail('Unexpected invocation of handleRequest');
        return null;
    }
}

export class properties {
}
