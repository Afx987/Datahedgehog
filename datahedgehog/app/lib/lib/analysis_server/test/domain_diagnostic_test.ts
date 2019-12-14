/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_diagnostic_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DiagnosticDomainTest);
    });
};
export namespace DiagnosticDomainTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'DiagnosticDomainTest';
    export type Interface = Omit<DiagnosticDomainTest, Constructors>;
}
@DartClass
export class DiagnosticDomainTest extends lib3.AbstractAnalysisTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        this.generateSummaryFiles = true;
        super.setUp();
        this.handler = new bare.createInstance(any,null,this.server);
        this.server.handlers = new core.DartList.literal(this.handler);
    }
    test_getDiagnostics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : string = '/project/bin/test.dart';
            this.resourceProvider.newFile('/project/pubspec.yaml','name: project');
            this.resourceProvider.newFile(file,'main() {}');
            this.server.setAnalysisRoots('0',new core.DartList.literal('/project/'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            await this.server.onAnalysisComplete;
            let request = new bare.createInstance(any,null).toRequest('0');
            let response = this.handler.handleRequest(request);
            let result = new bare.createInstance(any,null,response);
            expect(result.contexts,hasLength(1));
            let context : any = op(Op.INDEX,result.contexts,0);
            expect(context.name,'/project');
            expect(context.explicitFileCount,1);
            expect(context.implicitFileCount,4);
            expect(context.workItemQueueLength,isNotNull);
        } )());
    }

    test_getDiagnostics_noRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request = new bare.createInstance(any,null).toRequest('0');
            let response = this.handler.handleRequest(request);
            let result = new bare.createInstance(any,null,response);
            expect(result.contexts,isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DiagnosticDomainTest() {
    }
}

export class properties {
}
