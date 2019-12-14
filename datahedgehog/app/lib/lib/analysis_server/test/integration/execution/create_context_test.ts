/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/execution/create_context_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CreateContextTest);
    });
};
export namespace CreateContextTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'CreateContextTest';
    export type Interface = Omit<CreateContextTest, Constructors>;
}
@DartClass
export class CreateContextTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_create() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.standardAnalysisSetup();
            let contextId : string = (await this.sendExecutionCreateContext(this.sourceDirectory.path)).id;
            expect(contextId,isNotNull);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CreateContextTest() {
    }
}

export class properties {
}
