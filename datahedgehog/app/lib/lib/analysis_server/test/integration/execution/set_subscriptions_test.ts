/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/execution/set_subscriptions_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetSubscriptionsTest);
    });
};
export namespace SetSubscriptionsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SetSubscriptionsTest';
    export type Interface = Omit<SetSubscriptionsTest, Constructors>;
}
@DartClass
export class SetSubscriptionsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_subscribe() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.standardAnalysisSetup();
            await this.sendExecutionSetSubscriptions(new core.DartList.literal(ExecutionService.LAUNCH_DATA));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetSubscriptionsTest() {
    }
}

export class properties {
}
